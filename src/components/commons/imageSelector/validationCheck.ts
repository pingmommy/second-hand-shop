const IMAGE_SIZE = 5 * 1024 * 1024;

export default function ValidationCheck(file: File | undefined): boolean {
  if (file?.size === undefined) {
    alert("선택된 파일이 없습니다.");
    return false;
  }

  if (file?.size > IMAGE_SIZE) {
    alert("파일크기가 정해진 크기를 벗어났습니다.(5MB이하)");
    return false;
  }

  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
}
