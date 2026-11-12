import Component from "@/components/ui/demo";
import { ModeToggle } from "@/components/theme";

export default function Page() {
  return (
    <main className="flex flex-col py-20 items-center justify-center gap-3">
      <h1> Hello Dear User </h1>
      <p> U can Edit your Profile if you want </p>
      <Component /> 
      <ModeToggle />  
    </main>
  );
}