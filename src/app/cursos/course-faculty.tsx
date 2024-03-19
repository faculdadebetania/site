'use client';
import { Separator } from '@components/separator';
import { Swiper, SwiperSlide } from '@components/swiper';
import Image from 'next/image';
import { faculty } from 'src/mock/faculty';
import useCourse from './course.hook';

export function CourseFaculty({ id }: { id: string }) {
  const course = useCourse(id);
  return (
    <section
      className="container bg-primary flex flex-col gap-8"
      id="corpo-docente"
    >
      <h1 className="uppercase text-5xl lg:text-7xl text-white font-bold">
        CORPO DOCENTE
      </h1>
      <Swiper>
        {course.faculty?.map((id) => {
          const lecturer = faculty.find((lecturer) => lecturer.id === id);
          if (!lecturer) return null;
          return (
            <SwiperSlide key={id}>
              <CourseFacultyLecturer {...lecturer} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

type CourseFacultyLecturerProps = {
  id: number;
  name: string;
  qualifications: string[];
};

//TODO: limit lecturer card height/qualifications and add a button to the lecturer page
export function CourseFacultyLecturer({
  id,
  name,
  qualifications,
}: CourseFacultyLecturerProps) {
  return (
    <div className="min-h-[384px] flex flex-col !justify-start gap-4 bg-white rounded-lg text-primary p-8 pb-10">
      <div className="flex items-center gap-4">
        <Image
          alt={name}
          src={`/imagens/corpo-docente/${id}.png`}
          width="64"
          height="64"
          className="rounded-full border-secondary border-2 border-solid"
        />
        <h3 className="text-2xl uppercase font-semibold">{name}</h3>
      </div>
      <Separator className="!m-0 bg-neutral-300" />
      <ul className="flex flex-col gap-1">
        {qualifications.map((qualification, index) => (
          <li key={index}>&middot;&nbsp;{qualification}</li>
        ))}
      </ul>
    </div>
  );
}
