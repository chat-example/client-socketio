function Circle({
  color,
  isPulse = false,
}: {
  color: string;
  isPulse?: boolean;
}) {
  return (
    <span
      className={`mr-2 inline-block h-[8px] w-[8px] ${
        isPulse ? "animate-pulse" : ""
      } rounded-full`}
      style={{
        backgroundColor: color,
      }}
    />
  );
}

export default Circle;
