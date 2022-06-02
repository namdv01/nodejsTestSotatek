// bài 1:
const giaithua = (number) => {
  if (number <= 0) return 1;
  else return number * giaithua(number - 1);
};

// console.log(giaithua(5));

// bai 2
const kiemtraHoanhao = (number) => {
  let tong = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      tong += i;
    }
  }
  return tong == number ? "So hoan hao" : "Khong phai";
};

// console.log(kiemtraHoanhao(27));

//bai 3
const chonChuoiNhoNhat = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) {
      return {
        so: str[i],
        vitri: i,
      };
    }
  }
  return {
    so: str[str.length - 1],
    vitri: str.length - 1,
  };
};

// console.log(chonChuoiNhoNhat("231823625288"));

//bai 4
const soKeo = (n, c, m) => {
  // n: tiền
  // c: giá 1 viên kẹo
  // m: số giấy gói cần để đổi 1 viên kẹo

  let keo = (n - (n % c)) / c;
  let soGiay = keo;
  while (soGiay >= m) {
    keo += (soGiay - (soGiay % m)) / m;
    soGiay = (soGiay % m) + (soGiay - (soGiay % m)) / m;
  }
  return {
    keo,
    soGiay,
  };
};

// console.log(soKeo(6, 2, 2));
