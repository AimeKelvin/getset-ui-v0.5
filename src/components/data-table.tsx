"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PaymentTransaction {
  id: string;
  date: string;
  amount: string;
  status: "Completed" | "Pending" | "Failed";
  method: string;
}

const columns: ColumnDef<PaymentTransaction>[] = [
  {
    accessorKey: "id",
    header: "Transaction ID",
    cell: ({ row }) => <span className="text-sm">{row.original.id}</span>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <span className="text-sm">{row.original.date}</span>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-green-600">
        ${row.original.amount}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusColors = {
        Completed: "bg-green-500",
        Pending: "bg-yellow-500",
        Failed: "bg-red-500",
      };
      return (
        <Badge
          variant="outline"
          className={`${statusColors[row.original.status]} text-white px-2 py-1`}
        >
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Payment Method",
    cell: ({ row }) => <span className="text-sm">{row.original.method}</span>,
  },
];

export function PaymentTransactionsTable({
  data: initialData,
}: {
  data: PaymentTransaction[];
}) {
  const [data, setData] = React.useState(() => initialData);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto">
      <div className="mb-4 flex items-center justify-between">
        <Label htmlFor="search" className="text-sm font-medium">
          Search Transactions
        </Label>
        <Input
          id="search"
          placeholder="Search by ID or method"
          className="w-64"
          onChange={(e) => {
            const value = e.target.value.toLowerCase();
            setData(
              initialData.filter(
                (transaction) =>
                  transaction.id.toLowerCase().includes(value) ||
                  transaction.method.toLowerCase().includes(value)
              )
            );
          }}
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No transactions found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
