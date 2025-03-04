// --- URLs recursos 
const urlsOriginales = [
    "https://drive.google.com/file/d/1qQgHeYDado1kQVC4hVHvQMdugxsEspCP/view?usp=drivesdkPag_1.png",
    "https://drive.google.com/file/d/1pJ-7zAONPoXKKteUvKObLVdZkqlzPmGj/view?usp=drivesdkPag_3.png",
    "https://drive.google.com/file/d/1Or3hj6VTW2R-rOfvqUHqaBk9ZEDzcIRy/view?usp=drivesdkPag_5.png",
    "https://drive.google.com/file/d/1vrN9QB4-0pbO6vkchnjRARmO6p0iw-eH/view?usp=drivesdkPag_6.png",
    "https://drive.google.com/file/d/1Aa9d5lpdhPCDQc0V0PQgUeTB0ikmB4s6/view?usp=drivesdkPag_7.png",
    "https://drive.google.com/file/d/16KWqmGQ_DDIUIIs40bO44AZsnc6xbaOE/view?usp=drivesdkPag_8.png",
    "https://drive.google.com/file/d/1X_e-4PKclJOIFcx8Nd9ZyB1p1TYHN2R9/view?usp=drivesdkPag_9.png",
    "https://drive.google.com/file/d/1iEX3N4Qug72M7EcneVAdog2ccbix9d8q/view?usp=drivesdkPag_11.png",
    "https://drive.google.com/file/d/1f-vI0DQXxgHE_utn9Mo8n4RA9SWjbM99/view?usp=drivesdkPag_12.png",
    "https://drive.google.com/file/d/128PSendnhbNh0MyjXJKh9c_xecwIsIDr/view?usp=drivesdkPag_13.png",
    "https://drive.google.com/file/d/1cu5RVu0kbfqF2f_JbBZQIqYDtDYsEBCp/view?usp=drivesdkPag_14.png",
    "https://drive.google.com/file/d/1PYtGBN6Cef8jwozZB8CfKcfZm3q8VV3M/view?usp=drivesdkPag_15.png",
    "https://drive.google.com/file/d/1TDeRjpTZ90IkYVwKjO2_2z3X64Gz6MA7/view?usp=drivesdkPag_17.png",
    "https://drive.google.com/file/d/1JNjCvAkZtq6zYAWPJCEvoUgEtzZAb0OM/view?usp=drivesdkPag_18.png",
    "https://drive.google.com/file/d/1OdG7OBTv3wTnfBTVUVRMAjSSxIsYmeeW/view?usp=drivesdkPag_19.png",
    "https://drive.google.com/file/d/1nQSpQ-r4Ypk0c55JMvgOIPWox64gou2Q/view?usp=drivesdkPag_20.png",
    "https://drive.google.com/file/d/1DuCU7FJVvwwbRL_-GuuZpAmmAJrSk56S/view?usp=drivesdkPag_21.png",
    "https://drive.google.com/file/d/1GyEzX8wDhefWTr-imNL6cqFCa7aIdRG-/view?usp=drivesdkPag_23.png",
    "https://drive.google.com/file/d/1RHRO16SdrFz_JgTMv3rxqr7iVeQe_kPf/view?usp=drivesdkPag_24.png",
    "https://drive.google.com/file/d/1AfTaFAvapWpE2qOsQb7HcYeb_bksdcP1/view?usp=drivesdkPag_25.png",
    "https://drive.google.com/file/d/1oeZChQIMAUqEqNSVZQbDr1Hlk6T9M-v2/view?usp=drivesdkPag_26.png",
    "https://drive.google.com/file/d/1h-_oxRQDZBH7dcj0k84ma16h8igBPoJF/view?usp=drivesdkPag_27.png",
    "https://drive.google.com/file/d/1CxZqpplETQHiBXx3l_UArWlKgN9Cx1y3/view?usp=drivesdkPag_29.png",
    "https://drive.google.com/file/d/1GBRZMz1-BNwA7bE8PxlB80ye70Dv0S1n/view?usp=drivesdkPag_30.png",
    "https://drive.google.com/file/d/19WboxG-4-Vh1D1Edv08pjaZygmuhTqGz/view?usp=drivesdkPag_31.png",
    "https://drive.google.com/file/d/1KdtWakOkw64ocHC-fBzwXlEr5YSvSG5P/view?usp=drivesdkPag_32.png",
    "https://drive.google.com/file/d/1WR0c8cLcV_jVeXEAJR10PIdzmP2iDiWr/view?usp=drivesdkPag_33.png",
    "https://drive.google.com/file/d/1XJABISHLpPSZQtATFQedChRv85hFUQDx/view?usp=drivesdkPag_35.png",
    "https://drive.google.com/file/d/1dFC1A3xv56C2XgALYode2IGvpDHG-HRt/view?usp=drivesdkPag_36.png",
    "https://drive.google.com/file/d/1eckqWTvu28s1SaheiPdEec9JZ7Wd70zD/view?usp=drivesdkPag_37.png",
    "https://drive.google.com/file/d/1HrXoug-qLBSR4TQnmsONffRTLwAXBUaG/view?usp=drivesdkPag_38.png",
    "https://drive.google.com/file/d/1hAlhbMlwoqSkOeZGv9vsL-T90h1jxofI/view?usp=drivesdkPag_39.png",
    "https://drive.google.com/file/d/1kgro_VZVQ7OQo_bLSCyKgtvtaOX4-dRg/view?usp=drivesdkPag_41.png",
    "https://drive.google.com/file/d/1pZuYaxNinSZO4ZY1e4WJ2HDIaQXJJYbS/view?usp=drivesdkPag_42.png",
    "https://drive.google.com/file/d/1vw0Kum6DLzL4QnWzsBxs1be7E7BTZ2r4/view?usp=drivesdkPag_43.png",
    "https://drive.google.com/file/d/1v7Ro2JZBNjkxUQv-NWWz9FVB3wpvJycD/view?usp=drivesdkPag_44.png",
    "https://drive.google.com/file/d/18rKZl1WyUbxjKKLTMoGKUWbh6wLgXzqB/view?usp=drivesdkPag_45.png",
    "https://drive.google.com/file/d/1_lo6xPS-ITYPExds3LaQ43IGJ9D3Qqyy/view?usp=drivesdkPag_47.png",
    "https://drive.google.com/file/d/1sS6-2l0Iqg69AYPJXp7fG6H0fP78SaWb/view?usp=drivesdkPag_48.png",
    "https://drive.google.com/file/d/1fdlEnL3s_2T2z1VymfGaSNsHrNT3KAQG/view?usp=drivesdkPag_49.png",
    "https://drive.google.com/file/d/11ycBxFYeEYQqnxXfCOFIleKVjhaTI3_U/view?usp=drivesdkPag_50.png",
    "https://drive.google.com/file/d/1rV0eT6qG8jOinBqiRwgsrIUDlCGkVkGd/view?usp=drivesdkPag_51.png",
    "https://drive.google.com/file/d/1o8eoPxRDcPQAU9dC692luuowL01eBJL-/view?usp=drivesdkPag_53.png",
    "https://drive.google.com/file/d/1Z5OiyV14c1oVfb6NGmv_irt8gruDnnJC/view?usp=drivesdkPag_54.png",
    "https://drive.google.com/file/d/1izsBB0JmHt2UuKk2Ac3IhfH1jBpJd30C/view?usp=drivesdkPag_55.png",
    "https://drive.google.com/file/d/1wEVGFzQPDLgtYhNz8iW3f8V4GYePjPfd/view?usp=drivesdkPag_56.png",
    "https://drive.google.com/file/d/1WikvJQNjl9S77WQYKm0y4o8173cAUNjb/view?usp=drivesdkPag_57.png",
    "https://drive.google.com/file/d/1nnbCBapfQ1BUxGdqxSyryyL1xSMjfL0q/view?usp=drivesdkPag_59.png",
    "https://drive.google.com/file/d/1UtZ-5q8NBArpaDXKdHLEeq6o1KK23eUB/view?usp=drivesdkPag_60.png",
    "https://drive.google.com/file/d/13RdYcc6oi-F7Q6GGoxS9paQl89sZN2pk/view?usp=drivesdkPag_61.png",
    "https://drive.google.com/file/d/1EboTM-coFeW9lvPDApAI2o0iI2NDRNud/view?usp=drivesdkPag_62.png",
    "https://drive.google.com/file/d/1n_5-UB4uK-a5zlYmJJJ-mBQ7YfLTJNFZ/view?usp=drivesdkPag_63.png",
    "https://drive.google.com/file/d/1-rFM468R5JOgm3U5rsNP2YUNxJlnyJEn/view?usp=drivesdkPag_65.png",
    "https://drive.google.com/file/d/17ckprQlEclWyIvoze-iRILDMfbmbiBUV/view?usp=drivesdkPag_66.png",
    "https://drive.google.com/file/d/18tvlN5Fse0IcuV3mZ6l9FrBGZzho2I6E/view?usp=drivesdkPag_67.png",
    "https://drive.google.com/file/d/1PfrPE9FSXyqWpZb5WHk8Cez9Dn1pYWzA/view?usp=drivesdkPag_68.png",
    "https://drive.google.com/file/d/1f7m4u2a0TJLtJfMjgSzetXB_QPFur1tH/view?usp=drivesdkPag_69.png",
    "https://drive.google.com/file/d/10lAZ5xwCbqPp0g3OQJBoyHa1AviAIybU/view?usp=drivesdkPag_70.png",
    "https://drive.google.com/file/d/1PCpLNIb35oWLrdw5gggW9SCAK3F8bbQ5/view?usp=drivesdkPag_71.png",
    "https://drive.google.com/file/d/1RoDgWFWbfpvPXQQB5UJoHymoz6Xnu0w7/view?usp=drivesdkPag_72.png",
    "https://drive.google.com/file/d/1WwpyJGU7Lu2ZTBdzi6OO82b3G8c3G71X/view?usp=drivesdkPag_73.png",
    "https://drive.google.com/file/d/15N_Z_bkmGWmXzATHJp52-CsXd9s7oBma/view?usp=drivesdkPag_75.png",
    "https://drive.google.com/file/d/1gR-UIQT0JU5GF3jmoYwjFilcbg-xX5ly/view?usp=drivesdkPag_76.png",
    "https://drive.google.com/file/d/1q7s9dCTsQJEjR1w0Sk7c_S-GkSok7lCl/view?usp=drivesdkPag_77.png",
    "https://drive.google.com/file/d/13S3k42XVOWiuUYMLPxw99HSbLF08SOd7/view?usp=drivesdkPag_78.png",
    "https://drive.google.com/file/d/1OOKD_7nA_yFjFcd6jeNIsvAbINcyyBrZ/view?usp=drivesdkPag_79.png",
    "https://drive.google.com/file/d/12ljvalCXoP4Yvf_mItA8BHmc61u5nNVa/view?usp=drivesdkPag_81.png",
    "https://drive.google.com/file/d/1-Mk3-AsBej4GC67Shl5ci8MJW7gxcIo9/view?usp=drivesdkPag_82.png",
    "https://drive.google.com/file/d/1XVzdfaJnKKkwPLML-Ye24d61rfkDfLWx/view?usp=drivesdkPag_83.png",
    "https://drive.google.com/file/d/17JEORtOKEy9oIJw-_NUhAv6RqZZb0GLp/view?usp=drivesdkPag_84.png",
    "https://drive.google.com/file/d/1woQP05ppLMq1FD9nyQZez4coiqAW4hUU/view?usp=drivesdkPag_85.png",
    "https://drive.google.com/file/d/1iFQJCsW-q_NfYvm0KhQCs8rmmFjwTpNv/view?usp=drivesdkPag_87.png",
    "https://drive.google.com/file/d/1GaFgEHh6l7rdV_tiAcJufk6YLfJhybZr/view?usp=drivesdkPag_88.png",
    "https://drive.google.com/file/d/1NOfdYejN7DZG5iMSe_30J1lpfAa6z6R1/view?usp=drivesdkPag_89.png",
    "https://drive.google.com/file/d/1QQlpkKhdnUXDqX0j0YEQISp8b2pH0FPu/view?usp=drivesdkPag_90.png",
    "https://drive.google.com/file/d/1nzsrl2fwNNX1AlwUD54fZ2Q2tUWqCOle/view?usp=drivesdkPag_91.png",
    "https://drive.google.com/file/d/1Nyt2hPUo-8ft2RR120Nnhj6w05znKbDA/view?usp=drivesdkPag_93.png",
    "https://drive.google.com/file/d/1co-fZIdpqYtdkKriLx_V6bsVLe_aJJSn/view?usp=drivesdkPag_94.png",
    "https://drive.google.com/file/d/1mrXqIU1jVKZZyegGma2YKJV_K4RH_u01/view?usp=drivesdkPag_95.png",
    "https://drive.google.com/file/d/1d2-rqbRd6Hs0prZzRjeHHI1IAkhZgjuV/view?usp=drivesdkPag_96.png",
    "https://drive.google.com/file/d/1D0kk3Z7bCeYs9_9Si26AdevsIEWZBlQT/view?usp=drivesdkPag_97.png",
    "https://drive.google.com/file/d/1Zhuhuc4-PMR0vhbkRjuuS6gtvqCsa8PP/view?usp=drivesdkPag_99.png",
    "https://drive.google.com/file/d/13_1aOUHEE3du4xojAIuoTrtVPMiYd-QS/view?usp=drivesdkPag_100.png",
    "https://drive.google.com/file/d/1O5d1Xq6oARNb87RGMyTkOGiUk4xg_FyB/view?usp=drivesdkPag_101.png",
    "https://drive.google.com/file/d/1Vk6HfzVV0UFh_vOlPWzUEYYrcwd4QSOx/view?usp=drivesdkPag_102.png",
    "https://drive.google.com/file/d/1INn_ypmlYxxquf8YDJ9AZe9E81WGGPAv/view?usp=drivesdkPag_103.png",
    "https://drive.google.com/file/d/1NO-yua9QMbWnatFOo0_OnTY3v2k-wlsG/view?usp=drivesdkPag_105.png",
    "https://drive.google.com/file/d/1UfkGgQ6bsaMs2CGhgxHsbuWPV6nPNnZm/view?usp=drivesdkPag_106.png",
    "https://drive.google.com/file/d/1Up4VznrlMYTUa4K4VCK5-FYoVmDdb8Ar/view?usp=drivesdkPag_107.png",
    "https://drive.google.com/file/d/1ZPEWI_bRDyBUBabCv6w7JLL7tG-Sldsn/view?usp=drivesdkPag_108.png",
    "https://drive.google.com/file/d/1C5atmaJf4MahZ17qG_5CP3xia_eSYnqk/view?usp=drivesdkPag_109.png",
    "https://drive.google.com/file/d/1IKrmjcSQtLR7owpTZjQldFo5OVGmmmQc/view?usp=drivesdkPag_111.png",
    "https://drive.google.com/file/d/1a6P1S_XhTjVi5lLl_sx3CizaYT6q-CFA/view?usp=drivesdkPag_112.png",
    "https://drive.google.com/file/d/1UZpOu2u1Ah-IFAaxJvixOR_1DkL6x8IK/view?usp=drivesdkPag_113.png",
    "https://drive.google.com/file/d/10l4MaU0PRjZ7dEW3XbWPrLTRjTENtnbr/view?usp=drivesdkPag_114.png",
    "https://drive.google.com/file/d/1ZJEsmRF-3uyJzq3PwxLPpf3uASJD4Xnk/view?usp=drivesdkPag_115.png",
    "https://drive.google.com/file/d/1Z_nqzNpHxDd5MVQJtZkSdKZPTGJJVf59/view?usp=drivesdkPag_117.png",
    "https://drive.google.com/file/d/1wy_FBs2uKTcHPqb6O2l8EtNz3_vqQ4ZF/view?usp=drivesdkPag_118.png",
    "https://drive.google.com/file/d/1FjgUH-pyGC7Bx5KhjjnZ3xFcio5OWbSX/view?usp=drivesdkPag_119.png",
    "https://drive.google.com/file/d/1t62mz0kghjfxvHaagOTE_OTWKweOMKs4/view?usp=drivesdkPag_120.png",
    "https://drive.google.com/file/d/1F749i-JmqkMnJbiTgdWsMsisf2CQujhh/view?usp=drivesdkPag_121.png",
    "https://drive.google.com/file/d/1cefeYf4fLFJJ1VegoRwUIWMNMrGOwGIu/view?usp=drivesdkPag_123.png",
    "https://drive.google.com/file/d/1Lut8YQBcm4UEtLIFYyYkKlbWExFiYI5F/view?usp=drivesdkPag_124.png",
    "https://drive.google.com/file/d/1Rk_jSR0UBwMIqAUdpuXa6PvGtisQY8B1/view?usp=drivesdkPag_125.png",
    "https://drive.google.com/file/d/1p_2yLwsFe84G6iEBdaw-tSyhgr1YnEgZ/view?usp=drivesdkPag_126.png",
    "https://drive.google.com/file/d/1gcLHiUec7dsl-xY7VTMiSDlEW9Fs-ceN/view?usp=drivesdkPag_127.png",
    "https://drive.google.com/file/d/1po-Ws3tejDC5_aY3P-trCj8nSjh4R9o3/view?usp=drivesdkPag_129.png",
    "https://drive.google.com/file/d/1XZl72tHpqlKGoIwAAi2UUZ8rK79zb4CD/view?usp=drivesdkPag_130.png",
    "https://drive.google.com/file/d/11UDOd_u6rt520ljDAiC-1t1wL4zwNKt_/view?usp=drivesdkPag_131.png",
    "https://drive.google.com/file/d/1oyHwsGFRBEiTWmiXFTn-tRp2aexKQCpu/view?usp=drivesdkPag_132.png",
    "https://drive.google.com/file/d/1YaXOMJD18EPwwL0uLOpTTgvan306_fnS/view?usp=drivesdkPag_133.png",
    "https://drive.google.com/file/d/1HsbyYLZYZdkD3mdUVMWqHAIpJRo0hLQ_/view?usp=drivesdkPag_134.png",
    "https://drive.google.com/file/d/1mh0u3RutncreZrUeZf-OQm0wnokdHSgn/view?usp=drivesdkPag_135.png",
    "https://drive.google.com/file/d/1IrvNZ9QVrpkzjEXaGvAhzymzzOF8hJQj/view?usp=drivesdkPag_137.png",
    "https://drive.google.com/file/d/1IbSkxlSAktyVknm3Esr5Sp8CMVN2YqQD/view?usp=drivesdkPag_138.png",
    "https://drive.google.com/file/d/13Y5oiNRJ4J1x4I9CU2vpWQ_fHIIy_v0o/view?usp=drivesdkPag_139.png",
    "https://drive.google.com/file/d/1sq_VSqaLe_NnWpNWgtM2Ax3MMnu6KmLH/view?usp=drivesdkPag_140.png",
    "https://drive.google.com/file/d/121nsQtfpsj9AMmxaltnymMSzoQ0Dc8z3/view?usp=drivesdkPag_141.png",
    "https://drive.google.com/file/d/1KZqTc9syz1TCyVBkPrIaO8ixx1O7z0il/view?usp=drivesdkPag_143.png",
    "https://drive.google.com/file/d/1ZcBeU5MVVGWYC0UKRW91bRpunHNE9NDA/view?usp=drivesdkPag_144.png",
    "https://drive.google.com/file/d/1mGja5KmKY6k6cKjv2og4Gh1U_yUkyCfb/view?usp=drivesdkPag_145.png",
    "https://drive.google.com/file/d/1OoOqPnLNUTpzCa6vjuzx0J3LEtO7TLKk/view?usp=drivesdkPag_146.png",
    "https://drive.google.com/file/d/1c7XawLfhe7k0nYA9wmcpdj_Smsx76g3q/view?usp=drivesdkPag_147.png",
    "https://drive.google.com/file/d/1Kw6JXiVeiqqBr0FnrMXp4UhItXbgC2FA/view?usp=drivesdkPag_149.png",
    "https://drive.google.com/file/d/1RzqDYsyuevJSTqOIfg4UXkMt5J1cipCc/view?usp=drivesdkPag_150.png",
    "https://drive.google.com/file/d/1NNVSmlchGUcFjYNFbJZV8bZRVwrx0qNa/view?usp=drivesdkPag_151.png",
    "https://drive.google.com/file/d/1KTMWDYGYvnn0EUdzw2Zk0-fNv23z3iyc/view?usp=drivesdkPag_152.png",
    "https://drive.google.com/file/d/1BJI4hPyfJYjkQTC7XDYo0u3eO4pJKuji/view?usp=drivesdkPag_153.png",
    "https://drive.google.com/file/d/18GcbMxirxvqdiqt-97DjVz_7i7j3LBV_/view?usp=drivesdkPag_155.png",
    "https://drive.google.com/file/d/12ByGCk_FFduq7BT09D551bQ052eLS8n-/view?usp=drivesdkPag_156.png",
    "https://drive.google.com/file/d/1zOx-R_h6hHH486L2gIlMBfnoFB7Xfq8D/view?usp=drivesdkPag_157.png",
    "https://drive.google.com/file/d/18xgFN59hJam4GKlkeO0yTbuNQg9YkHNr/view?usp=drivesdkPag_158.png",
    "https://drive.google.com/file/d/1Up04HN9hPGmJ8vrbnAmvEdwpy3Nr-H4K/view?usp=drivesdkPag_159.png",
    "https://drive.google.com/file/d/179Y41nvfn7TAj3xduKLjQFabJzW8pzix/view?usp=drivesdkPag_161.png",
    "https://drive.google.com/file/d/1-4jiqx_ekJCv93-BvroBqYRAcapjIPtv/view?usp=drivesdkPag_162.png",
    "https://drive.google.com/file/d/1zBUcPR7t_60tjNRZHWse4DuVpo3-1LI-/view?usp=drivesdkPag_163.png",
    "https://drive.google.com/file/d/1sLwo3Yy-w3GJf3ZLqNxM-GskbDI6x3dr/view?usp=drivesdkPag_164.png",
    "https://drive.google.com/file/d/1cQXdUp7v4xjL5j74N-X6osGnaBed898Z/view?usp=drivesdkPag_165.png",
    "https://drive.google.com/file/d/1JjAsdRWszeDttBeMJ3nqibbAh6GM9_iM/view?usp=drivesdkPag_167.png",
    "https://drive.google.com/file/d/1gUfZOa5u2q4CPG8KXE8RldqWM4Wag9_4/view?usp=drivesdkPag_168.png",
    "https://drive.google.com/file/d/1bSWmSk1Mo0ZzKQLLLKD4ytysQujzpSuf/view?usp=drivesdkPag_169.png",
    "https://drive.google.com/file/d/1rZpbQKsc0hU4Ha23Sa0C0o-BbttS6YH_/view?usp=drivesdkPag_170.png",
    "https://drive.google.com/file/d/1AyronqvtUJKwJEmlplMcoqLx9rIPzKnb/view?usp=drivesdkPag_171.png",
    "https://drive.google.com/file/d/1XAxk93xYgp-ExaEe9WZS5xqZH5yCy3T5/view?usp=drivesdkPag_173.png",
    "https://drive.google.com/file/d/1_pvCEW5q5_L6KaKoUjKC0-gL8Ihg2XFV/view?usp=drivesdkPag_174.png",
    "https://drive.google.com/file/d/1sIVpe-m5JaGYkig6h_hL_D8U-9IFOU6s/view?usp=drivesdkPag_175.png",
    "https://drive.google.com/file/d/1EEWBvBovDj-JaOtgJK5A80m1pBL69GXw/view?usp=drivesdkPag_176.png",
    "https://drive.google.com/file/d/1pSuy9kGGOtK1fLktZv5BSmI2RD1eT5Ji/view?usp=drivesdkPag_177.png",
    "https://drive.google.com/file/d/1pv-eBgeQbvH6sN29L_naqUSWh8WbS9B1/view?usp=drivesdkPag_179.png",
    "https://drive.google.com/file/d/1VvzbBYMQARgJPv6Q9t2DG1Y_gpPGHG_Z/view?usp=drivesdkPag_180.png",
    "https://drive.google.com/file/d/1KwJpyqEKjvVU1hn06FhFsO0tbj3QfQ4C/view?usp=drivesdkPag_181.png",
    "https://drive.google.com/file/d/1bFlzqZPVj2Bw7-CFqdfOBwlSGaiL8vgL/view?usp=drivesdkPag_182.png",
    "https://drive.google.com/file/d/1fXyQjFkP8gR62rPENvQ_GphlEyoVEi4c/view?usp=drivesdkPag_183.png",
    "https://drive.google.com/file/d/139RNjzVf1umCZ9M-NK4gRl0IFHKFm-Zt/view?usp=drivesdkPag_185.png",
    "https://drive.google.com/file/d/1KUbIrPH2C6WHt5sQDKI3m058HtVyqzGl/view?usp=drivesdkPag_186.png",
    "https://drive.google.com/file/d/1f5IEaZymRmxcD340GrNspWhkddjPPVBm/view?usp=drivesdkPag_187.png",
    "https://drive.google.com/file/d/15x_DtF556U4CDbXnD5auEAe-4Y1aqQ2P/view?usp=drivesdkPag_188.png",
    "https://drive.google.com/file/d/1DHMgSlN-I8fPGxeihCzuWrkw3g9N4Cfx/view?usp=drivesdkPag_189.png",
    "https://drive.google.com/file/d/1K5hIF9TsD-a8TVCpmRv0KvRb_yQsdYt6/view?usp=drivesdkPag_191.png",
    "https://drive.google.com/file/d/1gcJlw4Nya6bk54Ot_YT_FfmaiMqPdZ2R/view?usp=drivesdkPag_194.png",
];
const urlsAudios = [
    "https://www.dropbox.com/scl/fi/c87wt20ymekhgytcawdsj/Leccion31.mp3?rlkey=lughxsrkwcxi5a0uihmeqcost&raw=1",
    "https://www.dropbox.com/scl/fi/f6u3r2l47mjf2h9xrzjcz/Leccion32.mp3?rlkey=97mcz67ed2qvr9st1ob5qt4e2&raw=1",
    "https://www.dropbox.com/scl/fi/721j4j76lgdnw81azx81v/Leccion33.mp3?rlkey=qzsi5kk8ly31kqlbjp80o5hak&raw=1",
    "https://www.dropbox.com/scl/fi/s65w6al4mkb8imhxc73o4/Leccion34.mp3?rlkey=6imuzp5uxmct63qicb3zpl13r&raw=1",
    "https://www.dropbox.com/scl/fi/imbo3eyhlhl1rtne8hmi8/Leccion35.mp3?rlkey=pg3otoxojc2g8490tsj1mlx7s&raw=1",
    "https://www.dropbox.com/scl/fi/t47y3ws80b9q8chb6nths/Leccion36.mp3?rlkey=b6tmpsbe5m35q55k10sxi29pt&raw=1",
    "https://www.dropbox.com/scl/fi/kzvnj4l48gnl25uit7n52/Leccion37.mp3?rlkey=gr4jz3vmanaj4ii76ymonggft&raw=1",
    "https://www.dropbox.com/scl/fi/x4ivkyl48fmppr4fwumjh/Leccion38.mp3?rlkey=wwgbapap8hlck0tls0vyje4d8&raw=1",
    "https://www.dropbox.com/scl/fi/1fmseipqrbi4g1m3xqa6w/Leccion39.mp3?rlkey=vvmot9r0lizran4jhet76pvc1&raw=1", 
    "https://www.dropbox.com/scl/fi/2odmuyaux0rh6p66d2ok0/Leccion40.mp3?rlkey=wndep4dca54grj4dhhw1a6zqs&raw=1",
    "https://www.dropbox.com/scl/fi/rdp4qa39gow0rlvxs0w8p/Leccion41.mp3?rlkey=4tw50nt2lbtpispzcwfpsmq67&raw=1", 
    "https://www.dropbox.com/scl/fi/i03vxhqllzxm1sodncsee/Leccion42.mp3?rlkey=8dde9rsnvoetxjx78apuwalgi&raw=1",
    "https://www.dropbox.com/scl/fi/07n43gu1q2wl8z0vpeqe9/Leccion43.mp3?rlkey=ef94cuaw458cweqmtc9g65sco&raw=1",
    "https://www.dropbox.com/scl/fi/1aqcrfdg31pezsgon08m4/Leccion44.mp3?rlkey=rapl039vacclpaysws7h6enh0&raw=1",
    "https://www.dropbox.com/scl/fi/piddlrdjd44id6pjig3gx/Leccion45.mp3?rlkey=0wu5talcwo1r400t7g0lfho0p&raw=1", 
    "https://www.dropbox.com/scl/fi/jnhxkhwndk4x3rd3dgzoq/Leccion46.mp3?rlkey=8w4x9bwlb1hammctssrlfr51l&raw=1",
    "https://www.dropbox.com/scl/fi/71mybubhaq315xwrzwcex/Leccion47.mp3?rlkey=7r9qx49ynjbsc8n9g3gierpfz&raw=1",
    "https://www.dropbox.com/scl/fi/pmjxfhkyigu9yncgao0v1/Leccion48.mp3?rlkey=wklrztkpc47tc80x2cazsv5rq&raw=1",
    "https://www.dropbox.com/scl/fi/9n24m90jl8zznbvhkub4x/Leccion49.mp3?rlkey=ptqn8anvb7h4y34dqgwiz6mds&raw=1",
    "https://www.dropbox.com/scl/fi/w95j1yfd0klxbyza3tvi8/Leccion50.mp3?rlkey=2kwqaa5jutcdp6q74zscq2yow&raw=1",
    "https://www.dropbox.com/scl/fi/i5s9tfxhibd4m2hvj0t1t/Leccion51.mp3?rlkey=ud07hsgynph0ep0si4bwylgrn&raw=1",
    "https://www.dropbox.com/scl/fi/iyoq40ywl0kx0ts4bz1zf/Leccion52.mp3?rlkey=yyzng9pb8gqbbslnnfeni3sjc&raw=1",
    "https://www.dropbox.com/scl/fi/n7cgtlf92shx7c7gkstg3/Leccion53.mp3?rlkey=5obsqwvqcpymle48sel8bonmj&raw=1",
    "https://www.dropbox.com/scl/fi/du1s5g4jl6b8u9zijzvzs/Leccion54.mp3?rlkey=9dx5cgcjj44r961gm6b691hgv&raw=1",
    "https://www.dropbox.com/scl/fi/w2q2pez7em73872tla79q/Leccion55.mp3?rlkey=lpgt40zoz3xi66hge3eb6hl0l&raw=1",
    "https://www.dropbox.com/scl/fi/s4twjtj5eay7wb7ucugnd/Leccion56.mp3?rlkey=j7yk7zayo3wybja85spvc5pgz&raw=1",
    "https://www.dropbox.com/scl/fi/18o8djle3wewbg56i6y40/Leccion57.mp3?rlkey=au7qry9giplwsntp709hpjent&raw=1",
    "https://www.dropbox.com/scl/fi/xyw1bbohmvv7ih9ulqqde/Leccion58.mp3?rlkey=l5nnv8eae5afgm0ft8jsp9if1&raw=1",
    "https://www.dropbox.com/scl/fi/nkp7jwr2ccczdr5wx9r0k/Leccion59.mp3?rlkey=oyacec99fk1l971e74chlu6kw&raw=1",
    "https://www.dropbox.com/scl/fi/upmzbrrufmxacrd1ws3iw/Leccion60.mp3?rlkey=85xb3nnc682c20bvmvikplueb&raw=1",
];

// --- Credenciales válidas ---
const VALID_CREDENTIALS = [
    { username: "1", password: "1" },
    { username: "user1", password: "pass1" },
];

// --- Elementos del DOM ---
const loginContainer = document.getElementById('login-container');
const contentContainer = document.getElementById('content-container');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const audioSelector = document.getElementById('audioSelector');
const audioPlayer = document.getElementById('audioPlayer');
const speedControl = document.getElementById('speedControl');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');

// --- Funciones de manejo de login ---
loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica si las credenciales coinciden con alguna de las válidas
    const validCredential = VALID_CREDENTIALS.find(
        (cred) => cred.username === username && cred.password === password
    );

    if (validCredential) {
        loginContainer.classList.add('hidden');
        contentContainer.classList.remove('hidden');
    } else {
        loginError.textContent = "Usuario o contraseña incorrectos.";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    contentContainer.classList.add('hidden');
});


// Control de volumen
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

// Botones de salto 
rewindBtn.addEventListener('click', () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 15);
});

forwardBtn.addEventListener('click', () => {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 15);
});

// Mantener el valor del volumen al cambiar de audio
audioSelector.addEventListener('change', () => {
    const selectedAudio = audioSelector.value;
    if (selectedAudio) {
        audioPlayer.src = selectedAudio;
        audioPlayer.volume = volumeSlider.value; // Mantener el volumen actual
        audioPlayer.play();
        playPauseBtn.textContent = 'Pausa';
    } else {
        alert('Por favor selecciona un audio.');
    }
});

// --- Funciones de manejo de audio ---

// Reproducir/Pausar
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pausa';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Reproducir';
    }
});

// Actualizar barra de progreso y tiempo
audioPlayer.addEventListener('timeupdate', () => {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = percent + '%';

    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
});

// Obtener duración total
audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

// Hacer clic en la barra de progreso para saltar a una parte del audio
progressBar.addEventListener('click', (e) => {
    const clickPosition = e.offsetX / progressBar.offsetWidth;
    audioPlayer.currentTime = clickPosition * audioPlayer.duration;
});

// Control de velocidad
speedControl.addEventListener('change', function () {
    const speed = parseFloat(speedControl.value);
    audioPlayer.playbackRate = speed;
});

// Reproducir el audio seleccionado
audioSelector.addEventListener('change', () => {
    const selectedAudio = audioSelector.value;
    if (selectedAudio) {
        audioPlayer.src = selectedAudio;
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        alert('Por favor selecciona un audio.');
    }
});

// --- Función para formatear el tiempo ---
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

speedControl.addEventListener('change', function () {
    const speed = parseFloat(speedControl.value);
    audioPlayer.playbackRate = speed;
});

// --- Cargar las opciones de audio ---
urlsAudios.forEach((audioUrl, index) => {
    const option = document.createElement('option');
    option.value = audioUrl;
    option.textContent = `Lección  ${index + 31}`;
    audioSelector.appendChild(option);
});

// --- Funciones de manejo de Google Drive ---
function extraerIdDeGoogleDrive(url) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
}

function convertirUrlGoogleDrive(url) {
    const fileId = extraerIdDeGoogleDrive(url);
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000` : null;
}

const imagenes = urlsOriginales.map(url => convertirUrlGoogleDrive(url));

// --- Variables para el flipbook ---
let currentPageIndex = 0;
let currentZoom = 1; // Nivel de zoom actual
const bookContainer = document.querySelector('.book-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');
const zoomSlider = document.getElementById('zoomSlider');

// --- Configuración del zoom ---
zoomSlider.addEventListener('input', (e) => {
    currentZoom = parseFloat(e.target.value);
    applyZoom();
});

function zoomIn() {
    currentZoom += 0.1;
    applyZoom();
}

function zoomOut() {
    currentZoom = Math.max(0.1, currentZoom - 0.1);
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    applyZoom();
}

// --- Funciones de navegación del flipbook ---
function loadImages() {
    bookContainer.innerHTML = ''; // Limpiar contenedor

    imagenes.forEach((src, index) => {
        const page = document.createElement('div');
        page.className = `page ${index === 0 ? 'active' : ''}`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Página ${index + 1}`;
        img.style.position = 'absolute';
        img.style.transform = `scale(${currentZoom})`; // Aplicar el zoom actual

        img.onerror = function () {
            this.parentElement.innerHTML = `
                <div class="error-message">
                    Error al cargar la imagen ${index + 1}.<br>
                    Asegúrate de que la imagen sea pública en Google Drive.
                </div>
            `;
        };

        page.appendChild(img);
        bookContainer.appendChild(page);
    });

    assignDragEvents(); // Asignar eventos de arrastre
    totalPagesSpan.textContent = imagenes.length;
    updateButtons();
}

function updateButtons() {
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === imagenes.length - 1;
    currentPageSpan.textContent = currentPageIndex + 1;
}

function showPage(index) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    pages[index].classList.add('active');
    applyZoom(); // Mantener el zoom al cambiar de página
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
        updateButtons();
    }
}

function nextPage() {
    if (currentPageIndex < imagenes.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
        updateButtons();
    }
}

function goToPage() {
    const pageInput = document.getElementById('pageInput');
    const pageNumber = parseInt(pageInput.value, 10);
    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > imagenes.length) {
        alert(`Por favor, ingresa un número de página válido entre 1 y ${imagenes.length}.`);
        return;
    }

    currentPageIndex = pageNumber - 1;
    updatePageDisplay();
    pageInput.value = ''; // Limpiar el input después de navegar
}

const pageInput = document.getElementById('pageInput');
pageInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const pageNumber = parseInt(pageInput.value, 10);
        if (!isNaN(pageNumber) && pageNumber > 0) {
            goToPage(pageNumber);
        } else {
            alert("Por favor, ingresa un número de página válido.");
        }
    }
});

function updatePageDisplay() {
    document.querySelectorAll('.page').forEach((page, index) => {
        page.classList.toggle('active', index === currentPageIndex);
    });

    currentPageSpan.textContent = currentPageIndex + 1;
    totalPagesSpan.textContent = imagenes.length;

    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === imagenes.length - 1;
}

function applyZoom() {
    const img = document.querySelector('.page.active img');
    if (img) {
        img.style.transform = `scale(${currentZoom})`;
    }
}

// --- Funciones de arrastre de las imágenes ---
let startX, startY, isDragging = false;

function dragStart(e) {
    isDragging = true;
    const img = e.target;
    startX = e.clientX - img.offsetLeft;
    startY = e.clientY - img.offsetTop;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
}

function drag(e) {
    if (!isDragging) return;
    const img = document.querySelector('.page.active img');
    if (img) {
        img.style.left = `${e.clientX - startX}px`;
        img.style.top = `${e.clientY - startY}px`;
    }
}

function dragEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', dragEnd);
}

function assignDragEvents() {
    const images = document.querySelectorAll('.page img');
    images.forEach(img => {
        img.addEventListener('mousedown', dragStart);
    });
}

// --- Navegación con teclas de flecha ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevPage();
    if (e.key === 'ArrowRight') nextPage();
});

document.body.style.cursor = "pointer";

document.body.style.setProperty("cursor", "pointer", "important");
document.querySelector("*").style.cursor = "pointer";

document.onkeydown = function (evt) {
    evt = evt || window.event;

    if (!evt.ctrlKey && evt.key === 'f') {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    } else if (!evt.ctrlKey && evt.key == 'm') {
        mv(1);
    } else if (!evt.ctrlKey && evt.key == 'n') {
        mv(-1);
    }
};

function toggleUrlProp(prop) {
    console.log(`Toggle cursor property: ${prop}`);
    if (prop === "cursor") {
        const currentCursor = document.body.style.cursor;
        if (currentCursor === "pointer") {
            document.body.style.setProperty("cursor", "default", "important");
        } else {
            document.body.style.setProperty("cursor", "pointer", "important");
        }
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h") {
        console.log("Tecla H presionada");
        setTimeout(() => {
            const currentCursor = document.body.style.cursor;
            document.body.style.cursor = currentCursor === "pointer" ? "default" : "pointer";
            console.log(`Cursor is now: ${document.body.style.cursor}`);
        }, 50);
    }
});

// Función para avanzar páginas (placeholder, debes implementar)
function mv(direction) {
    if (direction === 1) {
        nextPage();
    } else if (direction === -1) {
        prevPage();
    }
}

// Función para alternar el cursor (ejemplo básico)
function toggleUrlProp(prop) {
    console.log(`Toggle cursor property: ${prop}`);
    // Ejemplo de implementación
    if (prop === "cursor") {
        const cursorElement = document.documentElement.style.cursor;
        if (cursorElement === "pointer") {
            document.documentElement.style.cursor = "default";
        } else {
            document.documentElement.style.cursor = "pointer";
        }
    }
}
// Función para actualizar el cursor (ejemplo básico)
function updateCursor() {
    console.log("Cursor updated function called");
    const cursor = document.documentElement.style.cursor;
    console.log(`Cursor is now: ${cursor}`);
    // Asegúrate de que el cursor sea visible y cambie.
}

// Reproducir o pausar audio enfocado
function toggleAudioPlay(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    } else {
        console.error("Audio not found:", audioId);
    }
}

// Rebobinar audio enfocado
function rewind(audio) {
    if (audio) {
        audio.currentTime = Math.max(0, audio.currentTime - 10); // Rebobinar 10 segundos
    }
}

// --- Inicialización ---
loadImages();
updatePageDisplay();

// Funciones de manejo de teclado para zoom
document.addEventListener('keydown', function (event) {
    if (event.key === 'z') {
        zoomIn();
    } else if (event.key === 'x') {
        zoomOut();
    }
});

// Función para hacer zoom in
function zoomIn() {
    currentZoom += 0.1;
    applyZoom();
}

// Función para hacer zoom out
function zoomOut() {
    currentZoom = Math.max(0.1, currentZoom - 0.1);
    applyZoom();
}

// Función para aplicar el zoom a la imagen activa
function applyZoom() {
    const img = document.querySelector('.page.active img');
    if (img) {
        img.style.transform = `scale(${currentZoom})`;
    }
}

// Se agrega un evento de escucha para la tecla "keydown"
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        // Evitar el comportamiento predeterminado de la tecla espacio
        event.preventDefault();
        // Activar o pausar el audio como si se presionara el botón
        playPauseBtn.click();
    }
});

let hKeyState = 0;

const cursors = {
    triangleArrow: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"20\"><path d=\"M0 8 L20 8 L20 2 L32 10 L20 18 L20 12 L0 12 Z\" fill=\"red\"/></svg>') 0 10, auto"
};

function setGlobalCursor(isCustomCursor) {
    const cursorStyle = isCustomCursor ? cursors.triangleArrow : "default";

    document.body.style.setProperty("cursor", cursorStyle, "important");
    const allElements = document.getElementsByTagName('*');
    for (let element of allElements) {
        element.style.setProperty("cursor", cursorStyle, "important");
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h") {
        setGlobalCursor(hKeyState === 0);
        hKeyState = (hKeyState + 1) % 2;
    }
});

// --- Configuración de lecciones ---
const lessonsPerBook = 30; // Total de lecciones por libro
const firstLessonPage = 3; // Página donde comienza la primera lección (ajustable)
let startLessonNumber = 31; // Número inicial de la primera lección (ajustable)

// Configuración de los saltos especiales y dinámicos
const defaultPagesPerLesson = 5; // Páginas estándar entre lecciones
const specialPageJumpsBase = {
    10: 9, // Salto para la lección 10 a 11
    20: 7,  // Salto para la lección 20 a 21
};
// Función para calcular el salto dinámico según el rango inicial de lecciones
function getDynamicPageJumps(startLesson) {
    const specialPageJumps = {};
    const baseOffset = Math.floor((startLesson - 1) / lessonsPerBook) * lessonsPerBook;

    for (const [key, value] of Object.entries(specialPageJumpsBase)) {
        specialPageJumps[parseInt(key) + baseOffset] = value;
    }

    return specialPageJumps;
}

// Páginas dinámicas entre lecciones especiales
let variablePageJump = 5; // Configuración ajustable

// Elementos del selector
const lessonSelector = document.getElementById('lessonSelector');

// Función para poblar dinámicamente el selector de lecciones
function populateLessonSelector() {
    lessonSelector.innerHTML = ''; // Limpiar opciones previas

    // Añadir la opción "Inicio"
    const optionInicio = document.createElement('option');
    optionInicio.value = 1; // Página inicial
    optionInicio.textContent = 'Inicio';
    lessonSelector.appendChild(optionInicio);

    // Cálculo dinámico de páginas
    let currentPage = firstLessonPage;
    const specialPageJumps = getDynamicPageJumps(startLessonNumber);

    for (let i = 0; i < lessonsPerBook; i++) {
        const lessonNumber = startLessonNumber + i;
        const option = document.createElement('option');
        option.value = currentPage; // Página actual
        option.textContent = `Lección ${lessonNumber}`;
        lessonSelector.appendChild(option);

        // Calcular salto para la siguiente página
        if (specialPageJumps[lessonNumber]) {
            currentPage += specialPageJumps[lessonNumber];
        } else if (lessonNumber === startLessonNumber + 20) {
            currentPage += variablePageJump; // Salto especial dinámico
        } else {
            currentPage += defaultPagesPerLesson;
        }
    }
}

// Función para ir a la lección seleccionada
function goToLesson() {
    const selectedPage = parseInt(lessonSelector.value, 10);
    if (!isNaN(selectedPage)) {
        currentPageIndex = selectedPage - 1; // Ajustar a índice 0
        updatePageDisplay();
        showPage(currentPageIndex);
    }
}

// Función para actualizar el salto variable
function updateVariablePageJump(newJumpValue) {
    variablePageJump = newJumpValue;
    populateLessonSelector(); // Actualizar opciones
}

// Función para actualizar el inicio del rango de lecciones
function updateStartLessonNumber(newStartLessonNumber) {
    startLessonNumber = newStartLessonNumber;
    populateLessonSelector(); // Actualizar opciones
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    populateLessonSelector();
});





///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

// --- Funciones de navegación con teclado --- 
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevPage();
    if (e.key.toLowerCase() === 'a') prevPage();
    if (e.key.toLowerCase() === 'n') prevPage();
    if (e.key === 'ArrowRight') nextPage();
    if (e.key.toLowerCase() === 'd') nextPage();
    if (e.key.toLowerCase() === 'm') nextPage();
    if (e.key.toLowerCase() === 'z') zoomIn();
    if (e.key.toLowerCase() === 'c') zoomOut();
    if (e.key.toLowerCase() === 'r') resetImagePosition(); // Agregar reset con tecla 'r'
    if (e.code === 'Space') {
        e.preventDefault();
        playPauseBtn.click();
    }
});

// Reemplazar la función resetZoom existente con la nueva función
function resetZoom() {
    resetImagePosition();
}

// --- Funciones de zoom y posición ---
function resetImagePosition() {
    const img = document.querySelector('.page.active img');
    if (img) {
        // Reset zoom
        currentZoom = 1;
        zoomSlider.value = currentZoom;
        
        // Reset position
        img.style.left = '0px';
        img.style.top = '0px';
        img.style.transform = `scale(${currentZoom})`;
        img.style.transformOrigin = 'initial';
    }
}


// Función para activar o desactivar pantalla completa
document.onkeydown = function (evt) {
    evt = evt || window.event;

    if (!evt.ctrlKey && evt.key.toLowerCase() == 'f' || event.key.toLowerCase() === 'q')  {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    } else if (!evt.ctrlKey && evt.key.toLowerCase() == 'm') {
        mv(1);
    } else if (!evt.ctrlKey && evt.key.toLowerCase() == 'n') {
        mv(-1);
    }
};


document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h" || event.key.toLowerCase() === 'e') {
        console.log("Tecla H presionada");
        setTimeout(() => {
            const currentCursor = document.body.style.cursor;
            document.body.style.cursor = currentCursor === "pointer" ? "default" : "pointer";
            console.log(`Cursor is now: ${document.body.style.cursor}`);
        }, 50);
    }
});

// Función para activar o desactivar la propiedad del cursor
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === "h" || event.key.toLowerCase() === 'e') {
        console.log("Tecla H o E presionada");
        setTimeout(() => {
            const currentCursor = document.body.style.cursor;
            if (currentCursor === "pointer") {
                document.body.style.setProperty("cursor", "default", "important");
            } else {
                document.body.style.setProperty("cursor", "pointer", "important");
            }
        }, 100); 
    }
});


// --- Navegación con teclado y funciones especiales ---
document.addEventListener('keydown', (e) => {
    // Evitar el comportamiento predeterminado de la barra espaciadora
    if (e.code === 'Space') {
        e.preventDefault();
        toggleAudioPlayback();
        return;
    }

});