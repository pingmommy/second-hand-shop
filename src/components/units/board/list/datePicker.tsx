import type { Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/ko";
import { ConfigProvider, DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/ko_KR";
import type { RangePickerProps } from "antd/es/date-picker";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.locale("ko");

interface IMyDatePickerProps {
  setDate: Dispatch<SetStateAction<string[]>>;
}

const dateFormat = "YYYY/MM/DD";
const { RangePicker } = DatePicker;

export default function MyDatePicker({
  setDate,
}: IMyDatePickerProps): JSX.Element {
  const onChange: RangePickerProps["onChange"] = (_, dateString) => {
    setDate(dateString);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(251 212 91)",
        },
      }}
    >
      <RangePicker
        defaultValue={[
          dayjs("2023/01/01", dateFormat),
          dayjs("2024/01/01", dateFormat),
        ]}
        format={dateFormat}
        size="large"
        onChange={onChange}
        locale={locale}
      />
    </ConfigProvider>
  );
}
