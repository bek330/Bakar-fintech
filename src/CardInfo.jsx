import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, Text, Button, Container } from '@shadcn/ui';

const CardInfo = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    axios
      .get('https://www.bakarcompany.somee.com/api/IssueCard/get-card-data', {
        headers: {
          accept: '*/*',
        },
      })
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching card data:', error);
      });
  }, []);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <Text variant="h4">{cardData.cardBrand} Card</Text>
          <Text>{cardData.cardholder}</Text>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <Text><strong>Card Number:</strong> **** **** **** {cardData.last4Digits}</Text>
            <Text><strong>Expiry Date:</strong> {cardData.expiryDate}</Text>
            <Text><strong>CVC:</strong> {cardData.cvc}</Text>
            <Text><strong>Status:</strong> {cardData.status}</Text>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button variant="outline" onClick={() => alert('Freeze Card')}>Freeze Card</Button>
            <Button variant="outline" onClick={() => alert('Replace Card')}>Replace Card</Button>
            <Button variant="outline" onClick={() => alert('Cancel Card')}>Cancel Card</Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CardInfo;
