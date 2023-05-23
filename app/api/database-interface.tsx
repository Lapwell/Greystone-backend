import {createClient} from "@supabase/supabase-js"

const URL:any = process.env.URL
const PUB_KEY:any = process.env.PUB_KEY
const supaconn = createClient(URL, PUB_KEY)

export default function(name:string, date:Date, note:string) {
}
