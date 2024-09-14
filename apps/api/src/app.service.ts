import {Injectable} from '@nestjs/common';
import {createClient} from '@supabase/supabase-js'

import {QueryResult, QueryData, QueryError} from '@supabase/supabase-js'

const supabase = createClient('https://algsfyxfsvqgthqbmwzr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZ3NmeXhmc3ZxZ3RocWJtd3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMTEyODgsImV4cCI6MjA0MTY4NzI4OH0.7Y2QUFRraSGmt3NWbSGSUflMx71kjxWCVo8jA5EWjII')


@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!!';
    }

    async getCategories() {
        const categoriesQuery = supabase
            .from("categories")
            .select(`id, name`);
        // type CountriesWithCities = QueryData<typeof countriesWithCitiesQuery>;

        const {data, error} = await categoriesQuery;
        if (error) throw error;
        return data;
        // const countriesWithCities: CountriesWithCities = data;
    }
}
