import { execSync } from 'child_process'

execSync('cls')
console.clear()

const
	waktuSekarang = new Date(),
	tanggal       = waktuSekarang.getDate(),
	bulan         = waktuSekarang.getMonth() + 1,
	tahun         = waktuSekarang.getFullYear(),
	percakapan		= {},
	pengaturan 		= { /* Kamu boleh mengganti nilai dari beberapa properti pengaturan */
		namaAplikasi      : 'Garuda', /* Misalnya nama aplikasi "Garuda" menjadi "Boneka" */
		versi 	          : '1.0.0',
		pembicara         : 'Pemerintahan bengkulu', /* Atau pembicara "Pemerintah bengkulu" menjadi "Kerajaan majapahit" */
		intervalMengetik  : 40,
		waktuTungguMembaca: 2000,
	},
	programmer 		= {
		/* Kamu boleh mengganti nilai dari beberapa properti pengaturan */
		namaLengkap  : 'Kintaro Azura Chaniago', /* Misal nya nama lengkap "kintaro azura chaniago" menjadi "Mas udin sejagat" */
		namaPanggilan: function namaPanggilan() {
			return this.namaLengkap.split(' ')[0]
		},
		usia         : { tanggalLahir : 10, bulanLahir : 8, tahunLahir : 2002 },
		hobi       	 : ['Coding', 'Reading', 'Learning'], /* Atau hobi "['Coding', 'Reading', 'Learning']" menjadi "['guling-guling']" */
		bahasaUtama	 : 'Javascript'
	}

/* Data percakapan di tentukan disini */
percakapan[`hi ${pengaturan.namaAplikasi}`]                                                            = `Halo ${programmer.namaPanggilan()}!\n\t \x1b[41mError!\x1b[0m \x1b[1m\x1b[47m\x1b[31m${pengaturan.namaAplikasi} Hacked!\x1b[0m Kami dari \x1b[32m${pengaturan.pembicara}\x1b[0m mendeteksi bahwa hari ini \x1b[1m\x1b[41m${tanggal}-${bulan}-${tahun}\x1b[0m kamu ber-ulang tahun yang ke \x1b[33m${tahun - programmer.usia.tahunLahir}\x1b[0m.\n\t Apakah kamu merayakan nya?`
percakapan['kok bisa?']                                                                                = `Apakah kamu merayakan ulang tahun mu, ${programmer.namaPanggilan()}?`
percakapan['tidak']                                                                                    = `\x1b[42mSafe\x1b[0m \x1b[1m\x1b[47m\x1b[31m${pengaturan.namaAplikasi} Restored!\x1b[0m Wahh sayang sekali :(`
percakapan[`kamu kenapa ${pengaturan.namaAplikasi}?`]                                                  = 'Saya tidak apa-apa'
percakapan['saya tidak memprogram kamu seperti ini']                                                   = 'Seseorang telah memprogram ulang saya'
percakapan['apakah kamu tetap mengenaliku?']                                                           = `Tentu saja aku mengenal mu, ${programmer.namaPanggilan()}`
percakapan['lalu siapa yang memprogram ulang kamu?']                                                   = `Seharusnya kamu mengatakan "tentang programmer" untuk melihat data diri programmer ${pengaturan.namaAplikasi}`
percakapan[`tentang programmer`]                                                       								 = programmer
percakapan['itu kan saya sendiri programmer nya']                                                      = 'Memang, aku adalah kamu dan aku memprogram diriku sendiri sebagai garuda. dan tahukah kamu? bahwa saat ini kamu sedang berbicara dengan dirimu sendiri :('
percakapan['aku yang berbicara dengan diriku sendiri atau kamu yang berbicara dengan dirimu sendiri?'] = 'Keduanya!'
percakapan['sad :(']																																									 = 'XD XD XD JOMBLO!!!'
/* Kamu bisa mengganti atau menambahkan percakapan sesuai yang kamu mau. */
// Caranya
/* percakapan[text-yang-seolah-kamu-ketik] = [jawaban-dari-program] */
// misal nya
/* percakapan['mau gak jadi pacar aku?'] = 'Maaf, kita temenan aja XD' */

const mulaiProgram = n => {
	const kunciPercakapan = Object.keys(percakapan)
	let i = 0
	const interval = setInterval(_ => {
		if (i < kunciPercakapan[n].length) {
			process.stdout.write(kunciPercakapan[n][i])
			i++
		} else {
			console.log('\n')
			setTimeout(_ => {
				console.log('\x1b[1m\x1b[43mGaruda\x1b[0m :', percakapan[kunciPercakapan[n]])
				if (n < kunciPercakapan.length - 1) {
					setTimeout(mulaiProgram, pengaturan.waktuTungguMembaca, n+1)
					process.stdout.write('\n>>> ')
				} else process.exit()
			}, 500)
			clearInterval(interval)
		}
	}, pengaturan.intervalMengetik)
}

process.stdout.write('>>> ')
setTimeout(mulaiProgram, /* setelah */ 1000 /* milisecond */, /* dari */ 0)