import Link from "next/link";

export default function Logo({ light = false }) {
  return (
    <Link href="/" className={`brand${light ? " brandLight" : ""}`} aria-label="Poplar Landscapes homepage">
      <span className="brandMark" aria-hidden="true">
        <svg viewBox="0 0 36 36" fill="none">
          <path
            d="M18 3c4.2 5.1 8.8 10.6 8.8 16.2A8.8 8.8 0 0 1 18 28a8.8 8.8 0 0 1-8.8-8.8C9.2 13.6 13.8 8.1 18 3Z"
            fill="currentColor"
          />
          <path d="M18 10.5v20" stroke="#F4EFE4" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="brandCopy">
        <strong>Poplar</strong>
        <em>Landscapes N.W. Ltd</em>
      </span>
    </Link>
  );
}
