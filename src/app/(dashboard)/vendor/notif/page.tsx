import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
  { id: "728ed52f", amount: "+4", status: "Answered", email: "Gholi@gmail.com" },
  { id: "a3f91c07", amount: "+10", status: "didnt Answered", email: "Sam123@gmail.com" },
  { id: "5be2d814", amount: "+8", status: "Answered", email: "ali345@gmail.com" },
  { id: "c70e46a9", amount: "+3", status: "Answered", email: "reza.m88@gmail.com" },
  { id: "1d8b3f52", amount: "+12", status: "didnt Answered", email: "sara_k@gmail.com" },
  { id: "e94a07bd", amount: "+6", status: "Answered", email: "hamed2020@gmail.com" },
  { id: "3c5d1e80", amount: "+9", status: "Answered", email: "negin.t@gmail.com" },
  { id: "f2186ca4", amount: "+2", status: "didnt Answered", email: "mehdi77@gmail.com" },
  { id: "8a47b3e1", amount: "+15", status: "Answered", email: "pariya.n@gmail.com" },
  { id: "6e03d9f7", amount: "+7", status: "Answered", email: "kian_dev@gmail.com" },
  { id: "b15c82a3", amount: "+5", status: "didnt Answered", email: "zahra.h@gmail.com" },
  { id: "49f7e60d", amount: "+11", status: "Answered", email: "omid1990@gmail.com" },
  { id: "d2a85b16", amount: "+1", status: "didnt Answered", email: "niloofar@gmail.com" },
  { id: "07c3f94e", amount: "+14", status: "Answered", email: "arash.s@gmail.com" },
  { id: "9b6e21c8", amount: "+8", status: "Answered", email: "mina_r@gmail.com" },
] 
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10 px-10">
      <h1 className="text-2xl text-center pb-10"> Comments, suggestions </h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}