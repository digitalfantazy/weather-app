export const formatDate = (dateString: string): string => {
  const date = new Date(dateString); // Создаем объект Date
  const day = String(date.getDate()).padStart(2, '0'); // День (добавляем ведущий ноль)
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц (добавляем ведущий ноль)
  const hours = String(date.getHours()).padStart(2, '0'); // Часы (добавляем ведущий ноль)
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Минуты (добавляем ведущий ноль)

  return `${day}.${month} ${hours}:${minutes}`; // Форматируем дату
};
