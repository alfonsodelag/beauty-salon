import { useState } from "react";
import { Accordion, AccordionItem as BaseAccordionItem } from "@szhsin/react-accordion";
import type { JSX, ReactNode } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface IAccordionItemProps {
  header: ReactNode;
  children?: ReactNode;
  [key: string]: any;
}

const AccordionItem = ({ header, ...rest }: IAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BaseAccordionItem
      {...rest}
      header={({ state: { isEnter } }) => (
        <div className="flex items-center justify-between w-full py-4 px-4 border-b border-[#E7D2C4]">
          <h3 className="text-lg font-medium text-[#6F5141]">{header}</h3>
          <div className={`transition-transform duration-300 ${isEnter ? "rotate-180" : ""}`}>
            <MdArrowDropDown className="w-8 h-8 text-[#AE9380]" aria-hidden="true" />
          </div>
        </div>
      )}
      className="mb-2 overflow-hidden border-b border-[#E7D2C4]"
      buttonProps={{
        className: "w-full hover:bg-[#FFF8F1] transition-colors",
        onClick: () => setIsOpen(prev => !prev)
      }}
      contentProps={{
        className: "transition-height duration-300 ease-out bg-white"
      }}
      panelProps={{
        className: "p-5 text-[#75665F] leading-relaxed"
      }}
    />
  )
}

const HairStylingServices = (): JSX.Element => {
  return (
    <div className="w-full lg:w-6/12 mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#6F5141]" id="hair-styling-services-subtitle">
        Servicios de cabello
      </h2>

      <Accordion className="w-full" transition transitionTimeout={250}>
        <AccordionItem header="Corte y peinado">
          <p>
            Cortes de precisión adaptados a tu tipo de rostro y estilo personal. Nuestras estilistas crean looks que realzan tu belleza natural con una consulta previa, lavado relajante y peinado incluido.
          </p>
        </AccordionItem>

        <AccordionItem header="Balayage">
          <p>
            Técnica de coloración que ilumina el cabello de forma natural y progresiva. Ideal para quienes buscan un resultado luminoso, sin raíces marcadas y con un mantenimiento más espaciado.
          </p>
        </AccordionItem>

        <AccordionItem header="Morena iluminada">
          <p>
            Coloración diseñada para oscuras y morenas que quieren luz sin perder su tono base. El resultado es un cabello con movimiento, calidez y luminosidad natural. Técnica especializada en AURA.
          </p>
        </AccordionItem>

        <AccordionItem header="Mechas y tonalización">
          <p>
            Desde mechas clásicas hasta tonalizaciones personalizadas para unificar el color, cubrir raíces o agregar dimensión. Consulta con nuestras especialistas para encontrar el tono ideal para ti.
          </p>
        </AccordionItem>

        <AccordionItem header="Peinados">
          <p>
            Peinados para el día a día, ocasiones especiales, eventos o celebraciones. Desde recogidos elegantes hasta ondas suaves, adaptados a tu outfit y estilo personal.
          </p>
        </AccordionItem>

        <AccordionItem header="Cobertura de canas">
          <p>
            Coloración profesional para cubrir canas con resultados naturales y duraderos. Utilizamos productos de alta calidad que cuidan la fibra capilar mientras unifican y enriquecen el tono.
          </p>
        </AccordionItem>
      </Accordion>

      <div className="w-full mt-8 text-center flex justify-center">
        <a
          href="https://wa.me/50767925695"
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary min-w-full w-full sm:min-w-fit sm:w-fit text-white font-medium shadow-md"
          title="Agendar cita por WhatsApp"
          aria-label="Agendar cita de cabello por WhatsApp"
        >
          Reservar cita por WhatsApp
        </a>
      </div>
    </div>
  )
}

export default HairStylingServices
