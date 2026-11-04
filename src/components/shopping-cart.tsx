"use client";

import * as React from "react";
import { Minus, Plus, ShoppingBag, Tag, Trash2, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const initialItems: CartItem[] = [
  {
    id: "sneaker",
    name: "Court Runner Sneakers",
    variant: "Red / Size 42",
    price: 89,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
    inStock: true,
  },
  {
    id: "watch",
    name: "Classic Analog Watch",
    variant: "Silver / 40mm",
    price: 149,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80",
    inStock: true,
  },
  {
    id: "headphones",
    name: "Studio Headphones",
    variant: "Black / Wireless",
    price: 119,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    inStock: false,
  },
];

// Demo promo codes. Replace with a server-side validation call.
const PROMOS: Record<
  string,
  { label: string; type: "percent" | "shipping"; value?: number }
> = {
  SAVE10: { label: "10% off", type: "percent", value: 10 },
  FREESHIP: { label: "Free shipping", type: "shipping" },
};

const FREE_SHIPPING_THRESHOLD = 200;
const SHIPPING_FEE = 9;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function ShoppingCart() {
  const [items, setItems] = React.useState<CartItem[]>(initialItems);
  const [code, setCode] = React.useState("");
  const [promo, setPromo] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(10, Math.max(1, item.quantity + delta)) }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = code.trim().toUpperCase();
    if (!normalized) return;
    if (PROMOS[normalized]) {
      setPromo(normalized);
      setError(null);
      setCode("");
    } else {
      setError("This promo code is not valid.");
    }
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const promoDef = promo ? PROMOS[promo] : null;
  const discount =
    promoDef?.type === "percent" ? (subtotal * (promoDef.value ?? 0)) / 100 : 0;
  const qualifiesForFreeShipping =
    subtotal - discount >= FREE_SHIPPING_THRESHOLD ||
    promoDef?.type === "shipping";
  const shipping = items.length === 0 || qualifiesForFreeShipping ? 0 : SHIPPING_FEE;
  const total = subtotal - discount + shipping;
  const remainingForFree = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - (subtotal - discount),
  );

  if (items.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 rounded-xl border bg-card p-12 text-center text-card-foreground">
        <ShoppingBag className="size-10 text-muted-foreground" aria-hidden="true" />
        <h2 className="text-lg font-semibold">Your cart is empty</h2>
        <p className="text-sm text-muted-foreground">
          Items you add will show up here.
        </p>
        <Button onClick={() => setItems(initialItems)}>Restore demo items</Button>
      </div>
    );
  }

  return (
    <section
      aria-labelledby="cart-title"
      className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[1fr_22rem]"
    >
      {/* Items */}
      <div className="rounded-xl border bg-card text-card-foreground">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 id="cart-title" className="font-semibold">
            Shopping cart
          </h2>
          <span className="text-sm text-muted-foreground">
            {items.reduce((n, i) => n + i.quantity, 0)} items
          </span>
        </div>

        <ul className="divide-y">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 p-4">
              <img
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                className="size-24 shrink-0 rounded-lg border object-cover"
              />
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.variant}
                    </p>
                    <Badge
                      className={`mt-1.5 ${
                        item.inStock
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Ships in 2 weeks"}
                    </Badge>
                  </div>
                  <p className="font-medium tabular-nums">
                    {money.format(item.price * item.quantity)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div
                    className="inline-flex items-center rounded-lg border"
                    role="group"
                    aria-label={`Quantity for ${item.name}`}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="size-4" aria-hidden="true" />
                    </Button>
                    <span
                      className="w-8 text-center text-sm tabular-nums"
                      aria-live="polite"
                    >
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      onClick={() => updateQuantity(item.id, 1)}
                      disabled={item.quantity >= 10}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="mr-1.5 size-4" aria-hidden="true" />
                    Remove
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Order summary */}
      <aside
        aria-labelledby="summary-title"
        className="h-fit rounded-xl border bg-card p-4 text-card-foreground"
      >
        <h2 id="summary-title" className="font-semibold">
          Order summary
        </h2>

        {/* Promo code */}
        <form onSubmit={applyPromo} className="mt-4 space-y-2">
          <label htmlFor="promo" className="text-sm font-medium">
            Promo code
          </label>
          <div className="flex gap-2">
            <Input
              id="promo"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Try SAVE10"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "promo-error" : undefined}
            />
            <Button type="submit" variant="outline">
              Apply
            </Button>
          </div>
          {error && (
            <p id="promo-error" role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}
          {promoDef && promo && (
            <div className="flex items-center justify-between rounded-lg bg-success/10 px-3 py-2 text-sm text-success">
              <span className="inline-flex items-center gap-1.5">
                <Tag className="size-4" aria-hidden="true" />
                {promo} · {promoDef.label}
              </span>
              <button
                type="button"
                onClick={() => setPromo(null)}
                aria-label="Remove promo code"
                className="rounded-full p-0.5 hover:bg-success/20"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </form>

        {/* Totals */}
        <dl className="mt-5 space-y-2 border-t pt-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Subtotal</dt>
            <dd className="tabular-nums">{money.format(subtotal)}</dd>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-success">
              <dt>Discount</dt>
              <dd className="tabular-nums">-{money.format(discount)}</dd>
            </div>
          )}
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Shipping</dt>
            <dd className="tabular-nums">
              {shipping === 0 ? "Free" : money.format(shipping)}
            </dd>
          </div>
          <div className="flex justify-between border-t pt-3 text-base font-semibold">
            <dt>Total</dt>
            <dd className="tabular-nums">{money.format(total)}</dd>
          </div>
        </dl>

        {!qualifiesForFreeShipping && (
          <p className="mt-3 text-xs text-muted-foreground">
            Add {money.format(remainingForFree)} more to get free shipping.
          </p>
        )}

        <Button className="mt-5 w-full" size="lg">
          Checkout
        </Button>
      </aside>
    </section>
  );
}