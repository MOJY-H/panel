"use client";

import * as React from "react";
import { AlertToast } from "@/components/ui/alert-toast";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";

const initialAlerts = [
  { id: 1, styleVariant: "filled", variant: "success", title: "Payment processed", description: "Transaction ID: #f4402" },
  { id: 2, styleVariant: "filled", variant: "warning", title: "Connection failed", description: "Check your Internet connection" },
  { id: 3, styleVariant: "filled", variant: "info", title: "Update available", description: "Version 2.1.0 ready to install" },
  { id: 4, styleVariant: "filled", variant: "error", title: "Something went wrong", description: "Please try again later" },
  { id: 5, styleVariant: "default", variant: "success", title: "Payment processed", description: "Transaction ID: #f4402" },
  { id: 6, styleVariant: "default", variant: "warning", title: "Connection failed", description: "Check your Internet connection" },
  { id: 7, styleVariant: "default", variant: "info", title: "Update available", description: "Version 2.1.0 ready to install" },
  { id: 8, styleVariant: "default", variant: "error", title: "Something went wrong", description: "Please try again later" },
] as const;

type Alert = (typeof initialAlerts)[number];

export default function AlertToastDemo() {
  const [alerts, setAlerts] = React.useState<readonly Alert[]>(initialAlerts);

  const handleClose = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  const resetAlerts = () => {
    setAlerts(initialAlerts);
  };

  const renderColumn = (style: "filled" | "default") => (
    <div className="space-y-4 w-full max-w-sm">
      <AnimatePresence>
        {alerts
          .filter((a) => a.styleVariant === style)
          .map(({ id, variant, title, description, styleVariant }) => (
            <AlertToast
              key={id}
              variant={variant}
              styleVariant={styleVariant}
              title={title}
              description={description}
              onClose={() => handleClose(id)}
            />
          ))}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="w-full space-y-8">
      <div className="flex justify-center">
        <Button
          onClick={resetAlerts}
          disabled={alerts.length === initialAlerts.length}
        >
          Reset Alerts
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {renderColumn("filled")}
        {renderColumn("default")}
      </div>
    </div>
  );
}