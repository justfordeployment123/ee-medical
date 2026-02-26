export interface ServiceType {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string; // <-- Added this field
}

export interface StatType {
  id: string;
  value: string;
  label: string;
  icon: React.ElementType;
}