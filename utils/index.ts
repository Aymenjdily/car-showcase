import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filteres: FilterProps) {
    const headers = {
		'X-RapidAPI-Key': 'ed57c5a04amsh082d39a427e254bp14c4d8jsn3c9cbd457bd5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const { manufacturer, year, model, fuel,limit } = filteres

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    });

    const result = await response.json()

    return result
}

// this function created by chatGpt

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

export const updateSearchUrl = (type:string , value:string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type , value)

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName
}