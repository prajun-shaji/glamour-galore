export default function Items({ title, link }) {
  return (
    <>
      <ul>
        <h1 className="mb-1 font-semibold">{title}</h1>
        {link.map((item, i) => (
          <li
            className="text-sm leading-6 text-gray-400 duration-200 hover:text-teal-400"
            key={i}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
