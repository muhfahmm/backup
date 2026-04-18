package models

type Territory struct {
	ID        string  `json:"id"`
	Name      string  `json:"name"`
	Continent string  `json:"continent"`
	GDP       float64 `json:"gdp"`
	Pop       int64   `json:"population"`
}
