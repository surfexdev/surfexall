const G1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7wTG0y-NtQW_oUrIknqgcLOm0a15evGk_5aIRpWQjxgmf-vjiD4Q5m_g5oPmdEdxkagfXwvDyKWwus1a1I4fto2z6TtsKsymCQNApMfNpwcvdeV5uPVHYeYjr89Tkf7P6bX9XyNcDvsak-_LDCcJrFMPoij7vywBUnAsSraDDuazAkAOuKCEniJAVnoPRGvlPVkgBG1ueGKNiEGZltGRGpIdwlZ_BB6Q8FR-qu5FVA08Rd8PtYhgnDE4ASK_qLJOHJtBWyvU7E0";
const G2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDKV1hFk0NExALeDRxR-O3-4JEegj7gWiyjRrBL-VPdZqRaE6-6MEJIUjRNdoQ4yIThgLnQsb3R5vaHGpsPnkUqWov1yOiBlkmbeYKWeQC1vFq2q3gY8B9t5_1CbHWtUs7cSziYPZaMfzMvzQVjdI821K0Ll_rqUeLsIAsUXkgMVdFZpcidoPPpKny0PckhQXHnO7CEUXW7zBehtl8ppVBLS9wcUZwMK6ZuHvLqcjtKIZGuI49eonoWvWMN8MNXY4jgKKKQnrm6MCI";
const G3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuB-gq4YzMufWlCj21oxB3Ak6r8EIMje6uI-7CJPQDE4vlcqsUOU-FtYO4VRw2-ut8TDeyV_8ioK4QXGIMv3Pt30azKGE1tWov-b1WylaTn8k7gxHjpHB5r5Zg8aieHPWP5GXIMh6RYmvUhHUp8IZldOah25aXFsVF0SsPwr_WwpNQ6KxeoiHZGdjKuSVgabLBSW3n-7sNokgJ-9nJQ1oXjkVNhC3-jFxIE2FUyafIembsps9jakQVNLO8Hhg24sd0hB3tWjdPwTBMI";

export function InteractiveGrid() {
  const items = [
    { src: G1, label: 'Process' },
    { src: G2, label: 'Materials' },
    { src: G3, label: 'Innovation' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.label} className="group relative overflow-hidden h-48 md:h-56 border border-charcoal-200 dark:border-charcoal-800">
          <img src={item.src} alt={item.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white uppercase tracking-[0.2em] text-xs font-bold">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
