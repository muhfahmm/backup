/**
 * International Relationship Database
 */

export const allRelations: Record<string, { name: string, relation: number }[]> = {
  "indonesia": [
    { name: "amerika serikat", relation: 75 },
    { name: "china", relation: 70 },
    { name: "rusia", relation: 65 },
    { name: "australia", relation: 60 }
  ],
  "amerika serikat": [
    { name: "indonesia", relation: 75 },
    { name: "australia", relation: 95 }
  ],
  "china": [
    { name: "indonesia", relation: 70 },
    { name: "rusia", relation: 90 }
  ]
};
