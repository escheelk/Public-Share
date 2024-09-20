import { ShopItem } from "./InfoWebServer";

export function GenerateShopHTML(ownerName: string, shopItems: ShopItem[]) {
	// Create an HTML response dynamically with a table for the items
	let htmlContent = `
        <html>
            <head>
                <title>${ownerName}'s Shop</title>
                <style>
                    table {
                        width: 50%;
                        border-collapse: collapse;
                        margin: 20px 0;
                    }
                    table, th, td {
                        border: 1px solid black;
                    }
                    th, td {
                        padding: 8px 12px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to ${ownerName}'s Shop</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Tier</th>
                            <th>Slot</th>
                            <th>Gold Cost</th>
                            <th>Plat Cost</th>
                            <th>Dice Roll</th>
                            <th>Avg Damage</th>
                            <th>Bonus Type</th>
                            <th>Bonus Amount</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

	// Insert each shop item into the table as a table row
	shopItems.forEach((item) => {
		htmlContent += `
            <tr>
                <td>${item.itemName}</td>
                <td>${item.tier}</td>
                <td>${item.slot}</td>
                <td>${item.goldCost}</td>
                <td>${item.platCost}</td>
                <td>${item.diceRoll}</td>
                <td>${item.avgDmg}</td>
                <td>${item.bonusType}</td>
                <td>${item.bonusAmt}</td>
            </tr>
        `;
	});

	// Close the table and HTML tags
	htmlContent += `
                    </tbody>
                </table>
            </body>
        </html>
    `;
}
