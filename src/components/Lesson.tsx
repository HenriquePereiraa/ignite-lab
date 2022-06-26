import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from 'classnames'

interface lessonsProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: lessonsProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const { slug } = useParams<{ slug: string }>()
  const availableDateFormated = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesosn = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormated}</span>

      <div className={classNames('rounded border  border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors', {
        'bg-green-500':isActiveLesosn
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('flex items-center gap-2 text-sm text-blue-500 font-medium', {
              'text-white': isActiveLesosn
            })}>
              <Lock size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <CheckCircle size={20} />
              Em breve
            </span>
          )}
          <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border', {
            'border-white':isActiveLesosn,
            'border-green-300':!isActiveLesosn
          })}>
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className={classNames(' mt-5 block', {
          'text-white':isActiveLesosn,
          'text-gray-200':!isActiveLesosn
        })}>{props.title}</strong>
      </div>
    </Link>
  );
}
