"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AVATAR = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=96&h=96&fit=crop&crop=faces&q=80`;

const payments = [
  {
    id: "PAY-001",
    customer: { name: "John Doe", avatar: AVATAR("1507003211169-0a1dd7228f2d") },
    product: "Premium Plan",
    price: "$99.00",
    paymentType: "Credit Card",
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: "PAY-002",
    customer: { name: "Jane Smith", avatar: AVATAR("1494790108377-be9c29b29330") },
    product: "Basic Plan",
    price: "$29.00",
    paymentType: "PayPal",
    status: "Completed",
    date: "2024-01-16",
  },
  {
    id: "PAY-003",
    customer: { name: "Mike Johnson", avatar: AVATAR("1472099645785-5658abf4ff4e") },
    product: "Enterprise Plan",
    price: "$299.00",
    paymentType: "Bank Transfer",
    status: "Pending",
    date: "2024-01-17",
  },
  {
    id: "PAY-004",
    customer: { name: "Sarah Wilson", avatar: AVATAR("1438761681033-6461ffad8d80") },
    product: "Premium Plan",
    price: "$99.00",
    paymentType: "Stripe",
    status: "Completed",
    date: "2024-01-18",
  },
  {
    id: "PAY-005",
    customer: { name: "David Brown", avatar: AVATAR("1500648767791-00dcc994a43e") },
    product: "Basic Plan",
    price: "$29.00",
    paymentType: "Credit Card",
    status: "Failed",
    date: "2024-01-19",
  },
  {
    id: "PAY-006",
    customer: { name: "Emily Davis", avatar: AVATAR("1544005313-94ddf0286df2") },
    product: "Premium Plan",
    price: "$99.00",
    paymentType: "PayPal",
    status: "Completed",
    date: "2024-01-20",
  },
];

export type Payment = (typeof payments)[number];

const selectedCells = new Set<string>(["PAY-002-price", "PAY-003-customer"]);

export default function TableComponent() {
  const getStatusVariant = (status: Payment["status"]) => {
    switch (status) {
      case "Completed":
        return "default";
      case "Pending":
        return "secondary";
      case "Failed":
        return "destructive";
      default:
        return "outline";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full max-w-6xl space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Payment Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell
                data-selected={selectedCells.has(`${payment.id}-id`)}
                className="data-[selected=true]:bg-amber-600/30 font-mono text-sm"
              >
                {payment.id}
              </TableCell>
              <TableCell
                data-selected={selectedCells.has(`${payment.id}-customer`)}
                className="data-[selected=true]:bg-amber-600/30"
              >
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={payment.customer.avatar}
                      alt={payment.customer.name}
                    />
                    <AvatarFallback>
                      {payment.customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{payment.customer.name}</span>
                </div>
              </TableCell>
              <TableCell
                data-selected={selectedCells.has(`${payment.id}-product`)}
                className="data-[selected=true]:bg-amber-600/30"
              >
                {payment.product}
              </TableCell>
              <TableCell
                data-selected={selectedCells.has(`${payment.id}-price`)}
                className="data-[selected=true]:bg-amber-600/30 font-medium"
              >
                {payment.price}
              </TableCell>
              <TableCell
                data-selected={selectedCells.has(`${payment.id}-paymentType`)}
                className="data-[selected=true]:bg-amber-600/30"
              >
                {payment.paymentType}
              </TableCell>
              <TableCell
                data-selected={selectedCells.has(`${payment.id}-status`)}
                className="data-[selected=true]:bg-amber-600/30"
              >
                <Badge variant={getStatusVariant(payment.status)}>
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell
                data-selected={selectedCells.has(`${payment.id}-date`)}
                className="text-muted-foreground data-[selected=true]:bg-amber-600/30"
              >
                {formatDate(payment.date)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}