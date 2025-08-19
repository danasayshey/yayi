// src/pages/Cases.tsx
import { Link } from "react-router-dom";
import list from "@/data/cases.json";
import { toCoverUrl } from "@/lib/cover";

type CaseItem = {
  id: string;
  meta_title?: string;
  meta_description?: string;
  cover_image?: string; // Google Drive 檔案 id 或完整網址
};

export default function Cases() {
  const cases = (list as CaseItem[]) ?? [];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-yayi-brown">案例總覽</h1>

        {cases.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c) => {
              const cover = toCoverUrl(c.cover_image);
              const title = c.meta_title || c.id;
              return (
                <Link
                  key={c.id}
                  to={`/cases/${c.id}`}
                  className="block rounded-lg overflow-hidden border border-yayi-beige bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* 改用 <img> 確保 lazy-load 與 object-fit */}
                  <div className="aspect-video bg-gray-100">
                    <img
                      src={cover}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="font-medium text-yayi-brown mb-1">
                      {title}
                    </div>
                    {c.meta_description && (
                      <div className="text-sm text-gray-600">
                        {c.meta_description}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-600">尚未有案例。</div>
        )}
      </div>
    </div>
  );
}
