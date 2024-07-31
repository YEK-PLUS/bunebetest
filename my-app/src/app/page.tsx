import { Payment } from "./payment";
import { promises as fs } from 'fs';

export default async function Home() {
  const bankString = await fs.readFile(process.cwd() + '/src/app/bank.html', "utf-8");
  return (
    <Payment bankHTML={bankString} />
  );
}
