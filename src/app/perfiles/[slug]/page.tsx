// src/app/perfiles/[slug]/page.tsx (Server Component)
import Link from "next/link";

interface Profile {
  name: string;
  role: string; // Grado/Curso
  grade: string; // Matrícula o ID
  email: string;
  bio: string;
  imageUrl: string;
  bannerUrl: string;
}

interface ProfilePageProps {
  params: {
    slug: string;
  };
}

// Datos de simulación (¡Todas las 7 propiedades deben existir en cada entrada!)
const mockProfiles: { [key: string]: Profile } = {
  "sofia-martinez": {
    name: "Sofía Martínez",
    role: "5to Grado Avanzado",
    grade: "Matrícula: 2021001",
    email: "sofia.martinez@estudiante.edu",
    bio: "Estudiante destacada en robótica y programación. Ganadora del torneo nacional de matemáticas y líder del club de ciencias. Mi objetivo es desarrollar soluciones tecnológicas para la sostenibilidad.",
    imageUrl: "https://i.pravatar.cc/150?img=4",
    bannerUrl: "https://picsum.photos/id/40/800/200",
  },
  "luis-hernandez": {
    name: "Luis Hernández",
    role: "4to Grado",
    grade: "Matrícula: 2022015",
    email: "luis.hernandez@estudiante.edu",
    bio: "Capitán del equipo de debate y entusiasta de la historia antigua. Buscando prácticas en periodismo y comunicación social. Me apasiona analizar y comunicar eventos complejos.",
    imageUrl: "https://i.pravatar.cc/150?img=11",
    bannerUrl: "https://picsum.photos/id/160/800/200",
  },
  "ana-gomez": {
    name: "Ana Gómez",
    role: "3er Grado",
    grade: "Matrícula: 2023005",
    email: "ana.gomez@estudiante.edu",
    bio: "Especialista en desarrollo de apps móviles y diseño UX/UI. Trabaja en el proyecto de biblioteca digital de la escuela, enfocada en la accesibilidad para todos los estudiantes.",
    imageUrl: "https://i.pravatar.cc/150?img=25",
    bannerUrl: "https://picsum.photos/id/500/800/200",
  },
};

const getProfileData = async (slug: string) => {
  // Simulación de latencia
  await new Promise((resolve) => setTimeout(resolve, 50));
  return mockProfiles[slug] || null;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await (params as unknown as Promise<ProfilePageProps["params"]>);

  const profile = await getProfileData(slug);

  const BLUEDARK = "#050a22";
  const BLUE = "#0b255c";
  const YELLOW = "#e6b400";
  const FOREGROUND = "#ededed";

  if (!profile) {
    return (
      <div
        className="p-20 text-center min-h-screen"
        style={{ backgroundColor: BLUEDARK, color: FOREGROUND }}
      >
        <h1 className="text-3xl">Error 404: Perfil de {slug} no encontrado</h1>
        <Link
          href="/pruebas"
          className="mt-4 inline-block p-2 rounded-lg"
          style={{ color: YELLOW, border: `1px solid ${YELLOW}` }}
        >
          Volver a la Galería
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: BLUEDARK, color: FOREGROUND }}
    >
      {/* 1. SECCIÓN SUPERIOR: BANNER Y FOTO DE PERFIL */}
      <div
        className="relative mb-12 shadow-xl"
        style={{ backgroundColor: BLUE }}
      >
        {/* Banner de la Cubierta */}
        <div className="h-[200px] w-full overflow-hidden">
          <img
            src={profile.bannerUrl}
            alt="Banner de perfil"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="absolute w-full top-0 left-0 p-6 flex justify-between items-start">
          <Link
            href="/pruebas"
            className="p-2 rounded-full text-lg shadow-lg"
            style={{ color: YELLOW, backgroundColor: `${BLUEDARK}E0` }}
          >
            ← Galería
          </Link>
        </div>

        {/* Foto de Perfil (Superpuesta) */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
          <img
            src={profile.imageUrl}
            alt={`Foto de ${profile.name}`}
            className="w-32 h-32 rounded-full object-cover border-4 shadow-2xl"
            style={{ borderColor: BLUEDARK, outline: `5px solid ${YELLOW}` }}
          />
        </div>
      </div>

      {/* 2. SECCIÓN PRINCIPAL: INFORMACIÓN Y CONTENIDO */}
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <div className="text-center mb-10 pt-4">
          <h1
            className="text-4xl font-extrabold mb-1"
            style={{ color: FOREGROUND }}
          >
            {profile.name}
          </h1>
          <p className="text-xl font-light" style={{ color: YELLOW }}>
            Estudiante de {profile.role}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Columna Lateral (Detalles) */}
          <div
            className="w-full md:w-1/3 p-6 rounded-xl shadow-inner"
            style={{
              backgroundColor: `${BLUE}50`,
              border: `1px solid ${BLUE}`,
            }}
          >
            <h2
              className="text-2xl font-bold mb-4 border-b pb-2"
              style={{ color: YELLOW, borderColor: YELLOW }}
            >
              Detalles
            </h2>
            <p className="text-lg mb-2">
              **Matrícula:**{" "}
              {profile.grade.includes(":")
                ? profile.grade.split(": ")[1]
                : profile.grade}
            </p>
            <p className="text-lg mb-2">**Curso:** {profile.role}</p>
            <p className="text-lg">**Contacto:** {profile.email}</p>
          </div>

          {/* Columna Central (Biografía) */}
          <div
            className="w-full md:w-2/3 p-6 rounded-xl"
            style={{ backgroundColor: BLUE }}
          >
            <h2
              className="text-2xl font-bold mb-4 border-b pb-2"
              style={{ color: YELLOW, borderColor: FOREGROUND }}
            >
              Acerca de mí
            </h2>
            <p className="text-lg leading-relaxed">{profile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
