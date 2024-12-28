"use client";
import { Button, ButtonText } from "@yuvrajhere/rn-ui-lib/ui/button";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();

  return (
    <div className="m-2 bg-gray-100 p-[10%]">
      <Button size="md" action="negative" onPress={() => alert('hello 1')}>
        <ButtonText>Hello</ButtonText>
      </Button>
      <Button variant="outline" action="negative" onPress={() => alert('hello 2')}>
        <ButtonText>Hello</ButtonText>
      </Button>
    </div>
  );
};

export default Page;
