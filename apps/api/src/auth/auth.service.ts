import {Injectable} from '@nestjs/common';
import {createClient} from '@supabase/supabase-js'

const supabase = createClient('https://algsfyxfsvqgthqbmwzr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZ3NmeXhmc3ZxZ3RocWJtd3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMTEyODgsImV4cCI6MjA0MTY4NzI4OH0.7Y2QUFRraSGmt3NWbSGSUflMx71kjxWCVo8jA5EWjII');

@Injectable()
export class AuthService {
    async login(email, password) {
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        console.log('결과는?', data, error);
        return data;
    }
}
