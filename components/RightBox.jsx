export default function RightBox({ children }) {
    return (
      <div className="bg-[#1E1F29] border border-[#44475A] rounded-lg p-6 text-[#F8F8F2] w-full shadow-md font-mono">
        <div className="space-y-3 text-base leading-relaxed"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Mona Sans", sans-serif',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
  