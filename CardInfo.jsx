import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CardInfo = () => {
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const response = await fetch('https://www.bakarcompany.somee.com/api/IssueCard/get-card-data');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCardData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCardData();
    }, []);

    if (loading) {
        return <div>Loading card information...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!cardData) {
        return <div>No card data available.</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Card Information</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p>Card Number: {cardData.last4Digits ? "**** **** **** " + cardData.last4Digits : "N/A"}</p>
                    <p>Cardholder: {cardData.cardholderName || "N/A"}</p>
                    <p>Brand: {cardData.brand || "N/A"}</p>
                </div>
                <div>
                    <p>Expiry Date: {cardData.expiryDate || "N/A"}</p>
                    <p>CVC: ***</p>
                </div>
            </div>
            <Button className="mt-4" onClick={() => {}}>Freeze Card</Button>
        </div>
    );
};

export default CardInfo;