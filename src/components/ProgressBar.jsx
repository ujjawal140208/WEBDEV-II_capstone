export default function ProgressBar({ xp }) {
  return (
    <div className="xp-bar">
      <div
        className="xp-fill"
        style={{ width: `${xp % 100}%` }}
      />
    </div>
  );
}