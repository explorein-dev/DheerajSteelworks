import * as XLSX from "xlsx";

export const parseExcelFile = async (file) => {
  try {
    const response = await fetch(file);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    let data = XLSX.utils.sheet_to_json(worksheet);

    data = data.filter(item =>
      String(item.show || "")
        .trim()
        .toLowerCase() === "yes"
    );

    // ---------- CATEGORY NORMALIZATION ----------
    const normalizeCategory = (cat) =>
      String(cat)
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    const categories = [
      ...new Set(data.map((item) => normalizeCategory(item.category))),
    ];

    const menuData = {};
    categories.forEach((category) => {
      menuData[category] = data.filter(
        (item) => normalizeCategory(item.category) === category
      );
    });

    // ---------- GOOGLE DRIVE UTILITY ----------
    function toDriveThumbnail(url, size = 1000) {
      if (!url) return "";
      const patterns = [
        /\/d\/([^/]+)\//,
        /id=([^&]+)/,
        /uc\?export=view&id=([^&]+)/,
      ];

      let id = "";
      for (const p of patterns) {
        const match = url.match(p);
        if (match) {
          id = match[1];
          break;
        }
      }

      if (!id) return "";
      return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
    }

    // ---------- FILTER DETECTION ----------
    const firstRow = data[0] || {};

    const filterColumns = Object.keys(firstRow).filter((k) =>
      k.toLowerCase().startsWith("filter:")
    );

    const normalizeFilterId = (str) =>
      str.toLowerCase().replace("filter:", "").trim();

    const normalizeFilterName = (str) =>
      str
        .replace(/filter:/i, "")
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    const filters = filterColumns.map((key) => ({
      id: normalizeFilterId(key),
      name: normalizeFilterName(key)
    }));

    // ---------- APPLY TYPES + FILTER VALUES ----------
    Object.keys(menuData).forEach((category) => {
      menuData[category] = menuData[category].map((item) => {
        const newItem = {
          ...item,
          image: item.image
            ? item.image.trim().startsWith("http")
              ? toDriveThumbnail(String(item.image).trim())
              : process.env.PUBLIC_URL + "/assets/images/" + item.image.trim()
            : "",
          price: Number(item.price),
        };

        // Attach dynamic filters as boolean props
        filterColumns.forEach((col) => {
          const id = normalizeFilterId(col);
          newItem[id] = String(item[col]).toLowerCase() === "true";
        });

        return newItem;
      });
    });

    return { menuData, filters };
  } catch (error) {
    console.error("Error parsing Excel file:", error);
    return null;
  }
};
