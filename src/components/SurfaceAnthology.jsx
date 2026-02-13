import s1 from '../assets/images/surface1.svg';
import s2 from '../assets/images/surface2.svg';
import s3 from '../assets/images/surface3.svg';
const IMG_01 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBUVefAr0_B9xfNdt_lmjTR7eWDa8inB5Q872Oy9VrpuZBA5j7LCQvbdyIlrWIggK8fsohUaneIpH_AIOTaJDAFXHBx-u_6cuPkXdmu7jhTJETeI5l3vs1Pp8PC109GVZlu_KAMpM-HZr-S75M3Kxd8awHLTRCBdPDqvQHT9RB_0uCoZV6A6goTvDbfR6LiObrXWSSzflKsAQSxBS_LVjg_QQ5q-4a5m3yK2O1T4Y_rrPW4kPwuyV5HINIOGS4UOy88G5Ft73D6v_c";
const IMG_02 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHv7XAacyufG9EUPduH1-MlhRxA8_wmY9mJaDiU3-k3Q_l-Nq8RyZL-lxVw7-uO5t7NpoHCTbeyj_Fivd73sDDbumDqRYeUNs5kaPQsbYCF-d_4fiYWa0jCJM9zx6Efjgti4SJKPr6S9s6xNmK-wOSdAXRS7c3zHZ6V-BrETWfwep7UVAa3s22Hlj-dEF86lkFidxXLIdJUX4z2cNqUFZWC5pF5897I0INgmQHKi9kOddZKZyxgaT4a-fGO1ihZgjXHnU0Oj0yXY";
const IMG_03 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDKlA5lmxsRTVAa8_IjxnN1B3aXXMrcBVVckbMfGscvB8kAsIk_ttYjdMvFIh7ajIioqaUyEhe_716cL_elBfOU5dbTluqMAsKJR2NIjzAgrSrm7nIN5W2P8Zm139wy60gK69I7ruLSYXmSdiUK7fMH6i0JiYlAnnGL6zesbdbiuWv6zk7AXVqBCkYkNu8r8dMDu0tmxCH0yJqTtwBLrdYN-psAOk1YnIz8K41sSUgBXA2SDeunAFsV9_kpz1M8OPAWSfzG1i_Gtrs";
const IMG_04 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAF-UOFGRYawXC8DeKU68m998L5f3M9lYSINUEEL906qha7kqfVHPmeYOuWZo-jiChyx_QveTmAdNPcfujmGuMBx2GGzSvO3Jd2_ygffx7FpW_ZkiuWamoXiH--6vw_FYWSX3AxY8gk9wSUJZyZ5Ryn-seuxACGLtT5lNcbxPn7JMNH6gH-US-dbWqq5aPsXoaUjrEFVlXHw9DxB8HI3Gx0jfIaKSE2gPxntC_RqG1i1jWjJT5nzAuX_gMm_PVUBBSmVAPadmWBYO0";
const IMG_FORGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAGUhxJZFDBGN3G69Yom3vLUnl1km90wpiVuAlK1lmI951vlZBDeyXXome4N0W6Gski3zheylRN4a0Bnh62WMpQvs5k1qvJpOqTt38DbHvKHfOHBbd5esZsDsypBX1U8QKxCMMc9Oof_RlaagaO6Z3BsStQH09XZZx6_K13IjqrwEvJRjFiztwRfArMfoYy48TQeZwem3e1nN-k2DErcly903negjQCkZMXuSqbsTEBCOGANPF_P6nYEqR94mIGONrBocmpSfPLPgY";

export function SurfaceAnthology() {
  const items = [
    { src: IMG_01, series: 'Series 01', title: 'Oxidized Core' },
    { src: IMG_02, series: 'Series 02', title: 'Anthracite Basalt' },
    { src: IMG_03, series: 'Series 03', title: 'Machined Aluminum' },
    { src: IMG_04, series: 'Series 04', title: 'Tectonic Plate' },
    { src: IMG_FORGE, series: 'The Forge', title: 'Where Vision Meets Fire', wide: true, description: 'Our facility in Hamburg where every Surfex surface is born under intense heat and pressure.' },
  ];
  return (
    <section className="bg-charcoal-900 dark:bg-black py-24" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Material Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white">The Surface Anthology</h3>
          </div>
          <p className="max-w-md text-charcoal-400 font-light">
            A curated selection of iconic textures and industrial finishes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden ${item.wide ? 'aspect-[2/1] lg:col-span-2' : 'aspect-square'}`}
            >
              <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity ${item.wide ? 'flex flex-col items-center justify-center' : 'flex items-center justify-center'} p-8 text-center`}>
                <div>
                  <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold">{item.series}</span>
                  <h5 className={`${item.wide ? 'text-4xl' : 'text-2xl'} text-white font-heading mt-2`}>{item.title}</h5>
                  {item.description && (
                    <p className="text-charcoal-200 mt-4 max-w-sm">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
