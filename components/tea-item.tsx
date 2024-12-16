import { Tea } from "@/util/types";

export default function TeaItem({ tea }: { tea: Tea }) {
  return (
    <div className="m-5 text-xl">
      <h1 className="uppercase fraunces">{tea.name}</h1>
      <div className="lato">
        <p>{tea.description}</p>
      </div>
    </div>
  );
}
