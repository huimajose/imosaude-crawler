import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://iehsmuxjlrzfwordijiy.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllaHNtdXhqbHJ6ZndvcmRpaml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzkzNjcsImV4cCI6MjAxNjkxNTM2N30.8hmf2igDjxqcd6WH0LgxLhhzp1z5ll4TZ1hTEiKYRYM')


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    

    try {

        const { data, error } = await supabase
        .from('pacientesHistorico')
        .select('*')
        .order('data', { ascending: false})
        .limit(5)
        
        if(error){
            throw error;
        }

        res.status(200).json(data)
    } catch (error) {
        console.log('Ocorreu um erro ao buscar os registros: ', error)
        res.status(500).json({error: 'Ocorreu um erro no servidor'})
    }
}