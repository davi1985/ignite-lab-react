import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const availableDateFormatted = (date: Date) =>
  format(date, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });
