import { COUNTRIES_LIST_URL } from "../urls";
import { ICountriesList } from "./countrie-search.types";
import SelectBlock from "./select-block";
import { Providers } from "./provider";

async function getCountryNames() {
    const res = await fetch(COUNTRIES_LIST_URL, { next: { revalidate: 1 } });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    return result.data;
}

export default async function CountrySearch() {
    const countryNamesResponse: ICountriesList = await getCountryNames();
    const countryNamesList = Object.entries(countryNamesResponse).map(
        ([key, value]) => ({ value: key, label: value.country })
    );
    return (
        <Providers>
            <SelectBlock countryNamesList={countryNamesList} />
        </Providers>
    );
}
