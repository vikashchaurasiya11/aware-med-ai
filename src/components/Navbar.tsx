import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="p-4 bg-gray-200 flex justify-between">
      <h1 className="font-bold">Health Assistant</h1>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="border p-1 rounded"
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="or">ଓଡ଼ିଆ</option>
        {/* Yaha 22 languages ke options add kar */}
      </select>
    </nav>
  );
}
