"use client";

import { ChangeEvent, useState } from "react";

type UseCharacterLimitProps = {
  maxLength: number;
  initialValue?: string;
};

export function useCharacterLimit({
  maxLength,
  initialValue = "",
}: UseCharacterLimitProps) {
  const [value, setValue] = useState(initialValue.slice(0, maxLength));
  const [characterCount, setCharacterCount] = useState(
    Math.min(initialValue.length, maxLength),
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      setValue(newValue);
      setCharacterCount(newValue.length);
    }
  };

  return {
    value,
    characterCount,
    handleChange,
    maxLength,
  };
}