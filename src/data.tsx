import { Code, Smartphone, Palette, Globe } from "lucide-react";

import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";
export const services = [
  {
    title: "تطوير الويب",
    icon: <Code />,
    desc: "حلول متكاملة باستخدام Next.js و React",
  },
  {
    title: "تطبيقات الموبايل",
    icon: <Smartphone />,
    desc: "تطبيقات أندرويد و iOS بأداء عالٍ",
  },
  {
    title: "التصميم الرقمي",
    icon: <Palette />,
    desc: "واجهات مستخدم (UI/UX) عصرية وجذابة",
  },
  {
    title: "السيو الرقمي",
    icon: <Globe />,
    desc: "تحسين ظهورك في محركات البحث العالمية",
  },
];

export const reviews = [
  {
    name: "أحمد منصور",
    role: "المدير التنفيذي لشركة تيك",
    text: "تجربة العمل مع إنجاز كانت استثنائية. الفريق فهم رؤيتنا وحولها لواقع رقمي مبهر يفوق التوقعات.",
  },
  {
    name: "ليلى حسن",
    role: "مؤسسة متجر رواء",
    text: "الدقة في المواعيد واللمسة الفنية في التصميم هي ما يميزهم فعلاً. أنصح بهم بشدة لأي مشروع ريادي.",
  },
  {
    name: "خالد العبدالله",
    role: "مدير مشاريع",
    text: "حلول برمجية متطورة وسرعة في الاستجابة. لم نجد أي صعوبة في التواصل والتعديل.",
  },
  {
    name: "منى علي",
    role: "مصممة أزياء",
    text: "ساعدوني في بناء متجري الإلكتروني من الصفر، والنتيجة كانت مذهلة واحترافية جداً.",
  },
  {
    name: "منى علي",
    role: "مصممة أزياء",
    text: "ساعدوني في بناء متجري الإلكتروني من الصفر، والنتيجة كانت مذهلة واحترافية جداً.",
  },
];

export const projects = [
  {
    title: "منصة تجارة إلكترونية",
    type: "ويب سايت",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=500",
  },
  {
    title: "منصة تجارة لوجستية",
    type: "تصميم ",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500",
  },
  {
    title: "تطبيق إدارة مهام",
    type: "نظام إداري",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
  },
  {
    title: "موقع عقارات مودرن",
    type: "ويب سايت",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500",
  },
];

export const reasons = [
  {
    title: "الجودة أولاً",
    desc: "نلتزم بأعلى معايير البرمجة العالمية",
    icon: <Zap className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "فريق الخبراء",
    desc: "مطورون ومصممون ذوو سجل حافل في المشاريع واسعة النطاق",
    icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "التسليم في الموعد المحدد",
    desc: "نحن نحترم قيمة الوقت في عالم الأعمال سريع الخطى.",
    icon: <HeartHandshake className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "الدعم المستمر",
    desc: "نحن شركاء ناجحون، وليسوا مجرد مزودي خدمات",
    icon: <Globe className="w-10 h-10 text-blue-400" />,
  },
];
