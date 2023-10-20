export default function Loading() {
  return (
    <div className="w-full h-screen flex-1 items-center justify-center text-center">
      <h1>
        <progress value={null} />
      </h1>
    </div>
  );
}
