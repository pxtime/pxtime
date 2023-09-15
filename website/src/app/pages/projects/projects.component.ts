import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  currentPage = 'Print';
  selectPage(page: string) {
    this.currentPage = page;
  }
  portfolio =
    [
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_49.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Development",
        "link": "web_23.jpg"
      },
      {
        "client": "SPA Shakti",
        "tag": "Marketing",
        "link": "ads_8.png"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_12.png"
      },
      {
        "client": "Muta Mobila",
        "tag": "Branding",
        "link": "logo_12.jpg"
      },
      {
        "client": "Agraris",
        "tag": "Branding",
        "link": "logo_40.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_39.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_19.jpg"
      },
      {
        "client": "Canterburry Shool",
        "tag": "Branding",
        "link": "logo_53.jpg"
      },
      {
        "client": "Speed Pizza",
        "tag": "Print",
        "link": "print_3.jpg"
      },
      {
        "client": "xBody Cathedral",
        "tag": "UI/UX Design",
        "link": "web_11.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_51.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_31.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "UI/UX Design",
        "link": "web_24.jpg"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_4.png"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Marketing",
        "link": "nl_24.png"
      },
      {
        "client": "Info Medical",
        "tag": "Branding",
        "link": "logo_50.jpg"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "UI/UX Design",
        "link": "web_5.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Development",
        "link": "web_29.jpg"
      },
      {
        "client": "H2ON",
        "tag": "Print",
        "link": "print_9.jpg"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_14.jpg"
      },
      {
        "client": "Speed Pizza",
        "tag": "Print",
        "link": "print_17.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_28.jpg"
      },
      {
        "client": "H2ON",
        "tag": "Print",
        "link": "print_23.jpg"
      },
      {
        "client": "H2ON",
        "tag": "Development",
        "link": "web_6.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Marketing",
        "link": "nl_20.png"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_53.png"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_44.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Marketing",
        "link": "nl_2.png"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_1.jpg"
      },
      {
        "client": "SPA Shakti",
        "tag": "Marketing",
        "link": "ads_9.png"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_5.png"
      },
      {
        "client": "INTERN",
        "tag": "Print",
        "link": "print_47.png"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_3.png"
      },
      {
        "client": "Adicam Grup",
        "tag": "Branding",
        "link": "logo_2.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_25.png"
      },
      {
        "client": "Lego Romania",
        "tag": "Marketing",
        "link": "nl_22.png"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_3.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_12.png"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_13.png"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_33.jpg"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_9.png"
      },
      {
        "client": "DeluXe",
        "tag": "Branding",
        "link": "logo_24.jpg"
      },
      {
        "client": "Speed Pizza",
        "tag": "Print",
        "link": "print_38.jpg"
      },
      {
        "client": "Lego Romania",
        "tag": "Marketing",
        "link": "nl_19.png"
      },
      {
        "client": "Content Speed",
        "tag": "Branding",
        "link": "logo_23.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_37.png"
      },
      {
        "client": "Fall in Love Salsa",
        "tag": "Branding",
        "link": "logo_39.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_22.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Development",
        "link": "web_25.jpg"
      },
      {
        "client": "Speed Pizza",
        "tag": "Print",
        "link": "print_59.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Marketing",
        "link": "ads_2.png"
      },
      {
        "client": "Content Speed",
        "tag": "Marketing",
        "link": "nl_3.png"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_11.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_52.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_24.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Marketing",
        "link": "ads_13.png"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Marketing",
        "link": "nl_18.png"
      },
      {
        "client": "Mirel Gavenea",
        "tag": "Print",
        "link": "print_40.jpg"
      },
      {
        "client": "Arti DIR",
        "tag": "Branding",
        "link": "logo_32.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_37.png"
      },
      {
        "client": "Cabina Magica",
        "tag": "Marketing",
        "link": "ads_14.png"
      },
      {
        "client": "Mirel Gavenea",
        "tag": "Print",
        "link": "print_31.jpg"
      },
      {
        "client": "Rom Quality Cert",
        "tag": "Marketing",
        "link": "ads_16.png"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_13.jpg"
      },
      {
        "client": "SPA Shakti",
        "tag": "Print",
        "link": "print_61.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_58.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_16.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_57.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_18.jpg"
      },
      {
        "client": "Decorativ Consult",
        "tag": "Branding",
        "link": "logo_58.jpg"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_10.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_35.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_34.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Development",
        "link": "web_24.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_6.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_55.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "UI/UX Design",
        "link": "web_23.jpg"
      },
      {
        "client": "Upriserz, Lorand Soares Szasz",
        "tag": "Marketing",
        "link": "ads_19.png"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_27.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_7.jpg"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "Print",
        "link": "print_32.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_15.jpg"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_10.png"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_7.jpg"
      },
      {
        "client": "Dolce Nera",
        "tag": "UI/UX Design",
        "link": "web_32.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Branding",
        "link": "logo_44.jpg"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_9.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Marketing",
        "link": "ads_10.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "UI/UX Design",
        "link": "web_38.jpg"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_8.png"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_15.png"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_13.jpg"
      },
      {
        "client": "Agraris",
        "tag": "Branding",
        "link": "logo_30.jpg"
      },
      {
        "client": "Selfie Fun",
        "tag": "Print",
        "link": "print_12.jpg"
      },
      {
        "client": "Link Vulcano",
        "tag": "Branding",
        "link": "logo_27.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Branding",
        "link": "logo_22.jpg"
      },
      {
        "client": "Piatra Online",
        "tag": "UI/UX Design",
        "link": "web_36.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_41.jpg"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_36.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_34.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Branding",
        "link": "logo_45.jpg"
      },
      {
        "client": "Agraris",
        "tag": "Branding",
        "link": "logo_42.jpg"
      },
      {
        "client": "Eduard Sandu",
        "tag": "UI/UX Design",
        "link": "web_20.jpg"
      },
      {
        "client": "xBody Cathedral",
        "tag": "Development",
        "link": "web_11.jpg"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "Print",
        "link": "print_42.png"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_10.jpg"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_6.png"
      },
      {
        "client": "Dolce Nera",
        "tag": "Print",
        "link": "print_4.jpg"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "Print",
        "link": "print_30.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Development",
        "link": "web_38.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_38.jpg"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_17.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_29.jpg"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_51.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_20.jpg"
      },
      {
        "client": "Dolce Nera",
        "tag": "Development",
        "link": "web_8.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Marketing",
        "link": "nl_16.png"
      },
      {
        "client": "Content Speed",
        "tag": "Development",
        "link": "web_21.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Development",
        "link": "web_28.jpg"
      },
      {
        "client": "Dolce Nera",
        "tag": "UI/UX Design",
        "link": "web_8.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_57.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_62.png"
      },
      {
        "client": "Dolce Nera",
        "tag": "Print",
        "link": "print_36.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Development",
        "link": "web_37.png"
      },
      {
        "client": "Agraris",
        "tag": "Branding",
        "link": "logo_33.jpg"
      },
      {
        "client": "Royal School",
        "tag": "Marketing",
        "link": "ads_28.png"
      },
      {
        "client": "Mondliv Construct",
        "tag": "Branding",
        "link": "logo_43.jpg"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_11.jpg"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "Print",
        "link": "print_45.png"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "Print",
        "link": "print_50.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Branding",
        "link": "logo_21.jpg"
      },
      {
        "client": "Cabina Foto",
        "tag": "UI/UX Design",
        "link": "web_33.jpg"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_6.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Marketing",
        "link": "ads_11.png"
      },
      {
        "client": "Piatra Online",
        "tag": "Marketing",
        "link": "nl_23.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Development",
        "link": "web_26.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_48.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_37.jpg"
      },
      {
        "client": "Piatra Online",
        "tag": "Marketing",
        "link": "nl_21.png"
      },
      {
        "client": "Piatra Online",
        "tag": "Print",
        "link": "print_14.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_60.jpg"
      },
      {
        "client": "Dolce Nera",
        "tag": "Development",
        "link": "web_32.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_26.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_13.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "UI/UX Design",
        "link": "web_28.jpg"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_52.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Branding",
        "link": "logo_19.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_35.png"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_4.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Marketing",
        "link": "nl_1.png"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "Development",
        "link": "web_5.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "UI/UX Design",
        "link": "web_29.jpg"
      },
      {
        "client": "Team Vision",
        "tag": "Marketing",
        "link": "ads_12.png"
      },
      {
        "client": "Lego Romania",
        "tag": "Marketing",
        "link": "nl_15.png"
      },
      {
        "client": "CPI Guard",
        "tag": "Branding",
        "link": "logo_49.jpg"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_16.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_46.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_47.jpg"
      },
      {
        "client": "Eduard Sandu",
        "tag": "Development",
        "link": "web_20.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Marketing",
        "link": "ads_15.png"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "Print",
        "link": "print_8.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_2.png"
      },
      {
        "client": "Accesorii Dama",
        "tag": "Branding",
        "link": "logo_5.jpg"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_43.jpg"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_54.jpg"
      },
      {
        "client": "Piatra Online",
        "tag": "Print",
        "link": "print_39.png"
      },
      {
        "client": "Speed Pizza",
        "tag": "Print",
        "link": "print_21.jpg"
      },
      {
        "client": "Accord Broker",
        "tag": "Branding",
        "link": "logo_29.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Branding",
        "link": "logo_20.jpg"
      },
      {
        "client": "SPA Shakti",
        "tag": "Print",
        "link": "print_35.jpg"
      },
      {
        "client": "Upriserz Lorand Soares Szasz",
        "tag": "Print",
        "link": "print_5.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "UI/UX Design",
        "link": "web_26.jpg"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_18.jpg"
      },
      {
        "client": "Kusadasi Travel",
        "tag": "Print",
        "link": "print_2.jpg"
      },
      {
        "client": "IT Exclusiv",
        "tag": "Branding",
        "link": "logo_54.jpg"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_7.png"
      },
      {
        "client": "H2ON",
        "tag": "UI/UX Design",
        "link": "web_6.jpg"
      },
      {
        "client": "Lego Romania",
        "tag": "Marketing",
        "link": "nl_14.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "UI/UX Design",
        "link": "web_25.jpg"
      },
      {
        "client": "Sephora",
        "tag": "Marketing",
        "link": "nl_11.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_28.jpg"
      },
      {
        "client": "Personal Brand",
        "tag": "Branding",
        "link": "logo_48.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "Development",
        "link": "web_15.png"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Marketing",
        "link": "nl_17.png"
      },
      {
        "client": "Atelierul de Creatii Digitale",
        "tag": "Print",
        "link": "print_56.png"
      },
      {
        "client": "9695 Asistenta Rutiera",
        "tag": "Print",
        "link": "print_1.jpg"
      },
      {
        "client": "Piatra Online",
        "tag": "Development",
        "link": "web_36.jpg"
      },
      {
        "client": "Content Speed",
        "tag": "UI/UX Design",
        "link": "web_21.png"
      }
    ]
  constructor() {
  }
  ngOnInit()
    :
    void {
  }

}
