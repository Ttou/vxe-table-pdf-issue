import { createApp } from "vue";
import App from "./App.vue";
import VXETable from "vxe-table";
import VXETablePluginExportPDF from "vxe-table-plugin-export-pdf";
import "vxe-table/lib/style.css";

const app = createApp(App);

VXETablePluginExportPDF.setup({
  // Set default font
  fontName: "SourceHanSans-Normal",
  // Font maps
  fonts: [
    {
      // Font name
      fontName: "SourceHanSans-Normal",
      // Font library url
      fontUrl:
        "https://cdn.jsdelivr.net/npm/vxe-table-plugin-export-pdf/fonts/source-han-sans-normal.js",
    },
  ],
});
VXETable.use(VXETablePluginExportPDF);
app.use(VXETable);

app.mount("#app");
