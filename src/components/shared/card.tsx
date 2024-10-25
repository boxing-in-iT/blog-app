"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { on } from "events";
import { useRouter } from "next/navigation";
import React from "react";

interface CardDetailProps {
  params: {
    id: string;
    title: string;
    body: string;
  };
  onClick?: () => void;
}

export const CardItem = ({
  params: { id, title, body },
  onClick,
}: CardDetailProps) => {
  const router = useRouter();

  return (
    <Card
      isHoverable
      className="max-w-[400px] p-10 bg-[#ededed] shadow-md rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl h-[320px]"
    >
      <CardHeader className="pb-0">
        <h4 className="text-2xl font-bold text-gray-900 truncate">{title}</h4>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-y-auto text-gray-700 h-40">
        <p className="line-clamp-3">{body}</p>
      </CardBody>
      <CardFooter className="pt-4 ">
        <Button
          className="px-4 bg-gradient-to-r from-purple-700 to-blue-500 text-white font-semibold py-2 hover:from-blue-500 hover:to-purple-700"
          onPress={() => router.push(`/post/${id}`)}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};
