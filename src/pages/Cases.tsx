import { Link } from "react-router-dom";
import cases from "../data/cases.json";

export default function Cases() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">案例總覽</h1>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {cases.map((c: any) => (
          <Link
            key={c.id}
            to={`/cases/${c.id}`}
            className="block rounded-lg overflow-hidden border hover:shadow"
          >
            <div
              className="aspect-video bg-gray-100"
              style={{
                backgroundImage: c.cover_image
                  ? `url(https://drive.google.com/uc?id=${c.cover_image})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="p-3">
              <div className="font-medium">{c.meta_title || c.id}</div>
              <div className="text-sm text-gray-600">
                {c.meta_description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
