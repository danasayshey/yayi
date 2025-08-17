import { useParams } from "react-router-dom";
import cases from "../data/cases.json";

export default function CaseDetail() {
  const { id } = useParams();
  const data: any = cases.find((x: any) => x.id === id);

  if (!data) return <div className="p-6">找不到此案例</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">
        {data.meta_title || data.id}
      </h1>
      <p className="text-gray-600 mb-4">{data.meta_description}</p>

      {data.doc_id ? (
        <iframe
          title="case"
          className="w-full aspect-[4/3] border"
          src={`https://docs.google.com/document/d/${data.doc_id}/preview`}
        />
      ) : (
        <div className="text-sm text-gray-500">尚未提供內容</div>
      )}
    </div>
  );
}
