import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <span>
      <button
        onClick={() => i18n.changeLanguage("en")}
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="fi fi-us" />
      </button>

      <button
        onClick={() => i18n.changeLanguage("pt-BR")}
        type="button"
        className="ml-1 inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="fi fi-br" />
      </button>
    </span>
  );
};

export default LanguageSelector;
