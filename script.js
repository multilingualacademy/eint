// --- URLs recursos 
const urlsOriginales = [
    "https://drive.google.com/file/d/1XutH_EAgs5qj3Dhluxl-RdQlAewzXKA7/view?usp=drivesdkpag1.webp",
    "https://drive.google.com/file/d/1nsMEGGkMnln9vPP8O-3Xf1tieRQYZyjV/view?usp=drivesdkpag2.webp",
    "https://drive.google.com/file/d/1nkPlR_4VmO4uM2096vPe30oU_mUIcmYk/view?usp=drivesdkpag3.webp",
    "https://drive.google.com/file/d/1G2VdECXEUhSuWCLmL6O3zfd9mngrMrNA/view?usp=drivesdkpag4.webp",
    "https://drive.google.com/file/d/1zEqS-h-lfVGB51adMWTn3ONFfqcu4Cal/view?usp=drivesdkpag5.webp",
    "https://drive.google.com/file/d/1OdlYHMApknqMML1ZRWvVDOaJ6JGqyxWj/view?usp=drivesdkpag6.webp",
    "https://drive.google.com/file/d/1tJMp7wSFYX8rXTgmwoSe_yU_0yuERZbU/view?usp=drivesdkpag7.webp",
    "https://drive.google.com/file/d/1_UOBiwwGKawCnlQMHUZhcOluZhRHb3BP/view?usp=drivesdkpag8.webp",
    "https://drive.google.com/file/d/1Nh65T5Nla2Llx-eDRsN4_uJepk-QhUwP/view?usp=drivesdkpag9.webp",
    "https://drive.google.com/file/d/1XoOCmXaW-2yYLA0pr1S3fnbnCfNU5_fg/view?usp=drivesdkpag10.webp",
    "https://drive.google.com/file/d/1wAVFBm9C_MMyh4b9-NBTyJRywxqtjv0U/view?usp=drivesdkpag11.webp",
    "https://drive.google.com/file/d/1L0XYzMjaBWEl2nih-rUs9rGopSzPzObs/view?usp=drivesdkpag12.webp",
    "https://drive.google.com/file/d/1mhRUAZIjtF9u7-Eex3naFxD-oJ8adCqB/view?usp=drivesdkpag13.webp",
    "https://drive.google.com/file/d/1MLTp4MbY8hnRkvv6BwK7OIMP_o-Vi7A7/view?usp=drivesdkpag14.webp",
    "https://drive.google.com/file/d/1M7jfODTWgisd-Y2FLUj9HUv3kMCEslTl/view?usp=drivesdkpag15.webp",
    "https://drive.google.com/file/d/1A3s4IlcQWxv5U_1J7AogrPr6FyUzNH5K/view?usp=drivesdkpag16.webp",
    "https://drive.google.com/file/d/1CC1gj1Z6DrQBDeWiXeDXhGDK_VzUzHE1/view?usp=drivesdkpag17.webp",
    "https://drive.google.com/file/d/156USn_yAsaTz1OuUhWzhkPfpm74rWJ1O/view?usp=drivesdkpag18.webp",
    "https://drive.google.com/file/d/1kANOo2cTydD0VrXUDIc2cfb_CAtLS6iw/view?usp=drivesdkpag19.webp",
    "https://drive.google.com/file/d/1FoavMFGg1A1qC8k-PGfLBDsybmwsg4tM/view?usp=drivesdkpag20.webp",
    "https://drive.google.com/file/d/1uo5RvcLmy4duaWh329r7s2SdRLmKVIY5/view?usp=drivesdkpag21.webp",
    "https://drive.google.com/file/d/1H2oYMRPFIdR3cXRPUvnHkxrAOwXdM6-X/view?usp=drivesdkpag22.webp",
    "https://drive.google.com/file/d/1Ox81QGCcdV6DzzkQ1dYhUZpvUDGpsy-5/view?usp=drivesdkpag23.webp",
    "https://drive.google.com/file/d/1nlCMldV2cu1XOn9-TatU1EpYJetBQjxQ/view?usp=drivesdkpag24.webp",
    "https://drive.google.com/file/d/1Q9qPZ6WitrhRhOYqrJUG4mdOlxdQXe7y/view?usp=drivesdkpag25.webp",
    "https://drive.google.com/file/d/1eJZt1pJecgr_rF29uaNkYA7D_uW4sEpv/view?usp=drivesdkpag26.webp",
    "https://drive.google.com/file/d/1Stdv7TNFgvLO-_fCSzwjdDeC7lJyz1u3/view?usp=drivesdkpag27.webp",
    "https://drive.google.com/file/d/1L-lpt4vR1KEWeck-Q_SGntCUZ0K26UAZ/view?usp=drivesdkpag28.webp",
    "https://drive.google.com/file/d/1d1Fd2Xc9z_6lyovuHoYCIGjqbTovth0H/view?usp=drivesdkpag29.webp",
    "https://drive.google.com/file/d/13iElsZ90A3Tcw5hsrXpwV8670_T56-MV/view?usp=drivesdkpag30.webp",
    "https://drive.google.com/file/d/17lOHy3xqez5ICCECEZlRoNDC6xu4nhbd/view?usp=drivesdkpag31.webp",
    "https://drive.google.com/file/d/1jIgAf1R3n9Qa4BHXm5EYNXy5P0dATbVU/view?usp=drivesdkpag32.webp",
    "https://drive.google.com/file/d/16mf3bsWPl2wYldO4RcozhOB-JMKJP--X/view?usp=drivesdkpag33.webp",
    "https://drive.google.com/file/d/1xsau60pZaedhR6O3l2QUvy2f6yjxOrch/view?usp=drivesdkpag34.webp",
    "https://drive.google.com/file/d/1pUk6nc2Q5D5n3rb3BiO-YCUxrFPtUo74/view?usp=drivesdkpag35.webp",
    "https://drive.google.com/file/d/1fcI721yxmo53GtqGsyKzeYqweuyXcQ1D/view?usp=drivesdkpag36.webp",
    "https://drive.google.com/file/d/1XslkXgp5wc-s0FHW0v-J9op6XmH1vC0Y/view?usp=drivesdkpag37.webp",
    "https://drive.google.com/file/d/1Ys42ifsShTNO_BV-ymdjXqDDgyLVa-S_/view?usp=drivesdkpag38.webp",
    "https://drive.google.com/file/d/1ZgamXzQsxHWVdXvvkdUnd5qOMNZLnH9R/view?usp=drivesdkpag39.webp",
    "https://drive.google.com/file/d/1MtpCdnx8AwMke6Xsb5qMZMGZ_z2UwgCn/view?usp=drivesdkpag40.webp",
    "https://drive.google.com/file/d/1nkFZLkDqvXbrLgSVUUOjUa6PJhO-_yLF/view?usp=drivesdkpag41.webp",
    "https://drive.google.com/file/d/1t5-iSIKdizAnZ-I946HPhSPRPBZ6UwLa/view?usp=drivesdkpag42.webp",
    "https://drive.google.com/file/d/18NwSCnDUsUKN-s7M2yaKGD0C3fNJ-EUV/view?usp=drivesdkpag43.webp",
    "https://drive.google.com/file/d/1qv8ZVMrddWcxACFbOc27oE0sLTG1XCET/view?usp=drivesdkpag44.webp",
    "https://drive.google.com/file/d/1BhlwKmMZhTw90_kU0ADg5fdok0ni1N9e/view?usp=drivesdkpag45.webp",
    "https://drive.google.com/file/d/10i1Pss82pOqkSKsB3H-fUpuFXZyXUeHa/view?usp=drivesdkpag46.webp",
    "https://drive.google.com/file/d/1J2ZuSyJgdCLbLCj9nnkP9ZCWO1fnmKOe/view?usp=drivesdkpag47.webp",
    "https://drive.google.com/file/d/1xtnRwgXMAfh2-ZTvnD1ytbAXfO437yoG/view?usp=drivesdkpag48.webp",
    "https://drive.google.com/file/d/1Wc67bycP39dNo6pO6RsELypLazX5ty-5/view?usp=drivesdkpag49.webp",
    "https://drive.google.com/file/d/1-wxBlUDgg5fkyme12ea7sTRugZrv_CXK/view?usp=drivesdkpag50.webp",
    "https://drive.google.com/file/d/1jEFYwSMusXUZcNL2xu30UQooyLWFp02I/view?usp=drivesdkpag51.webp",
    "https://drive.google.com/file/d/1mdS5sJDmZI1L53OLYyHEOILWo8Hvzfsw/view?usp=drivesdkpag52.webp",
    "https://drive.google.com/file/d/16VQy10E3AOIfos2vS6UTYh8LfPvROIO7/view?usp=drivesdkpag53.webp",
    "https://drive.google.com/file/d/1ONWerU4-6IToJuj3Yb0KXbNOtwRnYA7D/view?usp=drivesdkpag54.webp",
    "https://drive.google.com/file/d/1Nr5ivKiVEj4JMIdVq5TCdv4mmM4XJqLj/view?usp=drivesdkpag55.webp",
    "https://drive.google.com/file/d/1KnQPN957EwtuEJQ3MJ9XGYa0kokarTqc/view?usp=drivesdkpag56.webp",
    "https://drive.google.com/file/d/1fJLs81RDVRJiwLGXZy7xDIT31zhMTdXu/view?usp=drivesdkpag57.webp",
    "https://drive.google.com/file/d/1Lb8v8F4ruuUk12qy5uFN7eNQ4xrRW2jF/view?usp=drivesdkpag58.webp",
    "https://drive.google.com/file/d/1QLUpauL1TlwPWDYlC5P-PEPS-JjH4VUl/view?usp=drivesdkpag59.webp",
    "https://drive.google.com/file/d/137DsPgE9plBFNyjApO1vpbvzVF4lcoQB/view?usp=drivesdkpag60.webp",
    "https://drive.google.com/file/d/1TGvEXWY4h4I1h8ofqisd6sxEZc6w_aVR/view?usp=drivesdkpag61.webp",
    "https://drive.google.com/file/d/1RPjddAUGl_4vfDYDnm93iwipTrU1QbHP/view?usp=drivesdkpag62.webp",
    "https://drive.google.com/file/d/1XkfFuRs6oI5kV6v9hIRd7G9c4MzMLJON/view?usp=drivesdkpag63.webp",
    "https://drive.google.com/file/d/1UifN5DkeiezDlgP_-e0S2nRrAehhFZl8/view?usp=drivesdkpag64.webp",
    "https://drive.google.com/file/d/1X0Nwz-3lJysrynutrXwr7algn_Mjhg70/view?usp=drivesdkpag65.webp",
    "https://drive.google.com/file/d/10tiQsgZNvZNyxIv2pNs7GwZliZOHXOII/view?usp=drivesdkpag66.webp",
    "https://drive.google.com/file/d/1_1kEe3QuZh-nbfIEpFgo6CrMiR7SzWMw/view?usp=drivesdkpag67.webp",
    "https://drive.google.com/file/d/1FBrnOzMEaplgfA6ozSyjqN-QF1GJR6-p/view?usp=drivesdkpag68.webp",
    "https://drive.google.com/file/d/13MN8v-0gFNrR7xNpIKeaneGTsE-H7sKL/view?usp=drivesdkpag69.webp",
    "https://drive.google.com/file/d/1nyY2ScAZMxmkvVzBXyrebFNnHEZK7MK_/view?usp=drivesdkpag70.webp",
    "https://drive.google.com/file/d/1fP3ROOmzF9WyBTeuinB2_wsVTyfmPPgt/view?usp=drivesdkpag71.webp",
    "https://drive.google.com/file/d/18UZfvDjE5zlPQAWUSwyl6GcmgrwbpxwX/view?usp=drivesdkpag72.webp",
    "https://drive.google.com/file/d/1PChiriCy70v524WoejgzlKQNmPBftA8z/view?usp=drivesdkpag73.webp",
    "https://drive.google.com/file/d/1MS-1ujJlxH4M8baxxfk6oj5RgJXJMOsv/view?usp=drivesdkpag74.webp",
    "https://drive.google.com/file/d/14UqJO278zQA6mONHNO4xh6gjiHQRCLsI/view?usp=drivesdkpag75.webp",
    "https://drive.google.com/file/d/1d_nTLah14B9f5EPTP2xVyrVABSjnOk-u/view?usp=drivesdkpag76.webp",
    "https://drive.google.com/file/d/1gy3k-pazTlmMj_2lwXdCaVJNM52RO7ms/view?usp=drivesdkpag77.webp",
    "https://drive.google.com/file/d/1rCXkChSIQ0sFRS2-3V5iOclPDE14FtkQ/view?usp=drivesdkpag78.webp",
    "https://drive.google.com/file/d/1FhCsqA5YvcDDDkaekKA1uzVMmyRe-F5-/view?usp=drivesdkpag79.webp",
    "https://drive.google.com/file/d/1kWWntAEgseNLxShFAKgYWir7g1ANeQRy/view?usp=drivesdkpag80.webp",
    "https://drive.google.com/file/d/1qvhZ9KTFoEHyxlblLvaxhTAL59EQN6Zz/view?usp=drivesdkpag81.webp",
    "https://drive.google.com/file/d/159bI1BuTOOAgix4Cg1VhF92XaYOdX33v/view?usp=drivesdkpag82.webp",
    "https://drive.google.com/file/d/16wpMsi-jtGc5N63TR3BqCt2vhzQJ3doe/view?usp=drivesdkpag83.webp",
    "https://drive.google.com/file/d/14krfmG4ASE2CXX2WMxJLUQGusKdmlEtw/view?usp=drivesdkpag84.webp",
    "https://drive.google.com/file/d/1_MpKjpNNP_7AxpDKUsmVQuNTq7oJd79u/view?usp=drivesdkpag85.webp",
    "https://drive.google.com/file/d/1xjVQdjJ62GpqB78yC92W7aWggpbGMbpm/view?usp=drivesdkpag86.webp",
    "https://drive.google.com/file/d/1geMiINotmRHx6XDEzrZzngylg-3Gyo3d/view?usp=drivesdkpag87.webp",
    "https://drive.google.com/file/d/1FzqcKCLdxkegUn2EQwg3SunCC8xi4LGs/view?usp=drivesdkpag88.webp",
    "https://drive.google.com/file/d/1qXSSLdnGkVXh8ihdWCZlTgxkKnzAz-wg/view?usp=drivesdkpag89.webp",
    "https://drive.google.com/file/d/1bl93McMPHs6RW1DiUOC9iZ5t2m9zSQwY/view?usp=drivesdkpag90.webp",
    "https://drive.google.com/file/d/18Xq2qf4Yixgu9nISRrnmizY3FJcC5BxP/view?usp=drivesdkpag91.webp",
    "https://drive.google.com/file/d/129RE0BopE8ykj9MFkuWSq_jBDbxWBWJ5/view?usp=drivesdkpag92.webp",
    "https://drive.google.com/file/d/1wEFFB9mRBpfeb6saDlTKYLWGs152mTac/view?usp=drivesdkpag93.webp",
    "https://drive.google.com/file/d/1tJgu8oE2buvJUR90gUaObk3LVevE7rBD/view?usp=drivesdkpag94.webp",
    "https://drive.google.com/file/d/1HpTKYBE1yQuGyOmBc9DfQqyp5rH8NXoT/view?usp=drivesdkpag95.webp",
    "https://drive.google.com/file/d/18X15NhS05UKO451IIwEmtVsU1wXuEaGV/view?usp=drivesdkpag96.webp",
    "https://drive.google.com/file/d/1S9cZl4l8epnFef57Wh5Mkg7gx4A-Vrew/view?usp=drivesdkpag97.webp",
    "https://drive.google.com/file/d/1hPW5uT5zBJKoW81njBBxTQC7W2KEiC5F/view?usp=drivesdkpag98.webp",
    "https://drive.google.com/file/d/1jCKs2gd0rXgMbsn6jIKswEgmnIJIglvW/view?usp=drivesdkpag99.webp",
    "https://drive.google.com/file/d/1ElL2fKkKxC1SaQu6ppSf2ndQRiK1cxrp/view?usp=drivesdkpag100.webp",
    "https://drive.google.com/file/d/1CNtSI-YMhWwivEujodVTcuHvtd00YCOa/view?usp=drivesdkpag101.webp",
    "https://drive.google.com/file/d/1KsDt9bTQ_LZWa90bOo7ATbpp-4H2NxDh/view?usp=drivesdkpag102.webp",
    "https://drive.google.com/file/d/1Ios_dXc6uQMFUkH8K78fod4NuAIwvLFP/view?usp=drivesdkpag103.webp",
    "https://drive.google.com/file/d/1bYzu4pNTA1kU1KR1NapvEPhXVpCNs6N-/view?usp=drivesdkpag104.webp",
    "https://drive.google.com/file/d/1tk0ERwQ-4dNFeKwHmztjcZ3Rm-rx7opJ/view?usp=drivesdkpag105.webp",
    "https://drive.google.com/file/d/1m1uee2Dlk0lSbH5raLt3a2thqlwiP4bH/view?usp=drivesdkpag106.webp",
    "https://drive.google.com/file/d/1MH6wZMs18p4iWnDvW-RyrKzfnVPQI1q1/view?usp=drivesdkpag107.webp",
    "https://drive.google.com/file/d/1fHufm50jHMm-t7pq4MXefZTfiFxt5am6/view?usp=drivesdkpag108.webp",
    "https://drive.google.com/file/d/1KsRbHp4spO1qaJOo-tmvc7OOD3xFSd-o/view?usp=drivesdkpag109.webp",
    "https://drive.google.com/file/d/1IKeqA-e8aDJ-YuOsZjTRm2VEKzuO7C7B/view?usp=drivesdkpag110.webp",
    "https://drive.google.com/file/d/1hFbYwDsUPJ1fhJifIH6GqT2xUfbD6QlQ/view?usp=drivesdkpag111.webp",
    "https://drive.google.com/file/d/1vLq-ZK-RrTRJ8V3J-2R3XdZon66010yU/view?usp=drivesdkpag112.webp",
    "https://drive.google.com/file/d/1RRpvWd96OZnodO1FUf8udg6cYr5nUwvw/view?usp=drivesdkpag113.webp",
    "https://drive.google.com/file/d/1MX5wkeukx7ypXuGIxtiOXIZD6M04f_c7/view?usp=drivesdkpag114.webp",
    "https://drive.google.com/file/d/1zPl_pLfl3R_r2YaQubXD8akdeUEJCr9z/view?usp=drivesdkpag115.webp",
    "https://drive.google.com/file/d/1uOcxXeWCE2-WqpohXLAjgEDc44_LS9Tp/view?usp=drivesdkpag116.webp",
    "https://drive.google.com/file/d/1bOmDLH30mYOUPxqVC1gZxpEXNmdSM9vp/view?usp=drivesdkpag117.webp",
    "https://drive.google.com/file/d/13UVm5zNRVL-crsl2lEHW3CchW31wMZID/view?usp=drivesdkpag118.webp",
    "https://drive.google.com/file/d/1ah7fgcipj9T66V9adYf5zKOY0os82-Mx/view?usp=drivesdkpag119.webp",
    "https://drive.google.com/file/d/1Zoauz71GvY8h2aQVt5S15cDPtr5KMDPq/view?usp=drivesdkpag120.webp",
    "https://drive.google.com/file/d/1Te20z3GIldi9llq-UD3QoyDAD856wM3M/view?usp=drivesdkpag121.webp",
    "https://drive.google.com/file/d/1av2ZIn6Bkad3XCc7EzUHDYiOAwTbuCHC/view?usp=drivesdkpag122.webp",
    "https://drive.google.com/file/d/14iPL2oBH3gktOIezHNBfmPPwygdxW4El/view?usp=drivesdkpag123.webp",
    "https://drive.google.com/file/d/1U93LmskXhg3pCYsXw9pASnS6_jT3VtmR/view?usp=drivesdkpag124.webp",
    "https://drive.google.com/file/d/14_cm_Zzpi8TiwxM3sPu48_FdiJJJv1GN/view?usp=drivesdkpag125.webp",
    "https://drive.google.com/file/d/1HngYDZn0QazTUgqPDDXL13spnngTNktP/view?usp=drivesdkpag126.webp",
    "https://drive.google.com/file/d/1M8h4C0TmfSJYaeXQSEeXvGDwpna9m_zR/view?usp=drivesdkpag127.webp",
    "https://drive.google.com/file/d/1xPYsFEb07FJaYW108az1sXuZplH_OL_e/view?usp=drivesdkpag128.webp",
    "https://drive.google.com/file/d/1SgDNe9adfktrKRb4bZRtcuL5O6Boz1kG/view?usp=drivesdkpag129.webp",
    "https://drive.google.com/file/d/1Al5-QBf9GUxuFRqtj8Qb8vsJgbkOAqUL/view?usp=drivesdkpag130.webp",
    "https://drive.google.com/file/d/1W978jwWBcVr1JlXqpQPe3ylrh138nW3J/view?usp=drivesdkpag131.webp",
    "https://drive.google.com/file/d/1tcTX01OELOvXTSjYA84d92Xjvu9cQQyy/view?usp=drivesdkpag132.webp",
    "https://drive.google.com/file/d/1N-j1mNJMqmdPA6vn467zQBlLxMl_nCxW/view?usp=drivesdkpag133.webp",
    "https://drive.google.com/file/d/1nun4IaaUHd6l_i_PBD5GFGt7zi6yRU4R/view?usp=drivesdkpag134.webp",
    "https://drive.google.com/file/d/1ZJnSaF1gOm4A6Lfk_GE5DPx1-ioCSGQO/view?usp=drivesdkpag135.webp",
    "https://drive.google.com/file/d/14HWa-GJbnTJLmVdeJRVDP0n1FHYZR3iO/view?usp=drivesdkpag136.webp",
    "https://drive.google.com/file/d/1FYgUwrUEedgfA7tJl8Hodt_QKha4vNJJ/view?usp=drivesdkpag137.webp",
    "https://drive.google.com/file/d/1x-OQOYrNf_A5YCqL82IZ4SrqGzObFIFv/view?usp=drivesdkpag138.webp",
    "https://drive.google.com/file/d/1QbSftbWcDMoEIY7pryHKO5pd12dJ7GxP/view?usp=drivesdkpag139.webp",
    "https://drive.google.com/file/d/1-VgBXZ6lFfpCgMuCKOFwBB2JfdpCkevW/view?usp=drivesdkpag140.webp",
    "https://drive.google.com/file/d/1n-oBLxnPf8XaHbSeSk61Va3ZWXo4V3kd/view?usp=drivesdkpag141.webp",
    "https://drive.google.com/file/d/180o6nMOfs9boSzMWZYup_cgCgGR3cU4O/view?usp=drivesdkpag142.webp",
    "https://drive.google.com/file/d/1C1HClns2rRNeq8LOaJKQOeP8B8TeIL3c/view?usp=drivesdkpag143.webp",
    "https://drive.google.com/file/d/1xJPFgUAC7Z7cRfCyXgddBjlskT4EvChd/view?usp=drivesdkpag144.webp",
    "https://drive.google.com/file/d/1vlDioxlaWN_sZLEutnQIh8IjdNmuTrGn/view?usp=drivesdkpag145.webp",
    "https://drive.google.com/file/d/1h_Gcz8nezpPH5lqok8vrNbVxbi7IXmdo/view?usp=drivesdkpag146.webp",
    "https://drive.google.com/file/d/1EwwwF4dzWGzQjRA6xuTIXQ_ZEBPyO4q7/view?usp=drivesdkpag147.webp",
    "https://drive.google.com/file/d/1FNIHiod6w5DK-Gt829e4Trxz6GZ3B1SC/view?usp=drivesdkpag148.webp",
    "https://drive.google.com/file/d/1uNcTuojm97X-hlNenR1N5tP0s1vYUd3_/view?usp=drivesdkpag149.webp",
    "https://drive.google.com/file/d/1CdBmtJ99nerTgeg2YkP8-kzAl83BUG5t/view?usp=drivesdkpag150.webp",
    "https://drive.google.com/file/d/1mSf2qEQKw0WT4H45E8IEwbKGDEODWtO4/view?usp=drivesdkpag151.webp",
    "https://drive.google.com/file/d/1ODNzfOdcwzeZIW50FOCHRdByUMyrSX_a/view?usp=drivesdkpag152.webp",
    "https://drive.google.com/file/d/1IsBI7w3REDGlHX8HRVmlnFT85d2HIs63/view?usp=drivesdkpag153.webp",
    "https://drive.google.com/file/d/1XtLQNumtlGd7H-zwklPPj4jAwJgbQ42T/view?usp=drivesdkpag154.webp",
    "https://drive.google.com/file/d/1mEzsDICjuCTzgXH5ND5n96_R7_Cp2cn1/view?usp=drivesdkpag155.webp",
    "https://drive.google.com/file/d/1hXZKWi3MbAgtUQobNnu7X9rlDn2RxZ9j/view?usp=drivesdkpag156.webp",
    "https://drive.google.com/file/d/1JxU6BUXSBhJ6wj_VFhchxhHxSSwqA14b/view?usp=drivesdkpag157.webp",
    "https://drive.google.com/file/d/1PWhbpV0wOYCW3jxv4_lfDFtcI7XG3B0T/view?usp=drivesdkpag158.webp",
    "https://drive.google.com/file/d/1TiRF_P1laSIj1fNnZQNf-ojxFbZyW5Cn/view?usp=drivesdkpag159.webp",
    "https://drive.google.com/file/d/1YQ07AETE2F-WHIFR9lBqdrj5ofVZOF3l/view?usp=drivesdkpag160.webp",
    "https://drive.google.com/file/d/1HWXD2qKmXdGekqCGJp53lTs0VSV4ZSzU/view?usp=drivesdkpag161.webp",
    "https://drive.google.com/file/d/1TY9gNdAWC3Xs3rPtA9Di3XINBZrFNDEv/view?usp=drivesdkpag162.webp",
    "https://drive.google.com/file/d/1WVMqFCvoIlQh03zopVrvs5UkSDb9ruhj/view?usp=drivesdkpag163.webp",
    "https://drive.google.com/file/d/1yXg-EtUXPnOPx4gkdRNBF5BQncqmHN3s/view?usp=drivesdkpag164.webp",
    "https://drive.google.com/file/d/1az3FaCQYVY41kZpB-hQQAeVQKReaHQY4/view?usp=drivesdkpag165.webp",
    "https://drive.google.com/file/d/1IEQChPJ_b9lFTStYxnz9rPP56gz3aLbO/view?usp=drivesdkpag166.webp",
    "https://drive.google.com/file/d/1BMsVEWahq6FrtBYpvu2R4jWMkV1N6pS4/view?usp=drivesdkpag167.webp",
    "https://drive.google.com/file/d/1c16T6_SYRhDbv6E2dAM7pbyksP_AeFF8/view?usp=drivesdkpag168.webp",
    "https://drive.google.com/file/d/1hPclnL6SOuw7CkTjQsTVdwYedecxEGIO/view?usp=drivesdkpag169.webp",
    "https://drive.google.com/file/d/1P6dKKTy3VtCb1CEKhauq-I55wl2pYObp/view?usp=drivesdkpag170.webp",
    "https://drive.google.com/file/d/18Z4LP8rOnATj3mb-wJapbjB8eTRLwBhS/view?usp=drivesdkpag171.webp",
    "https://drive.google.com/file/d/16N3F3XGz_syk9cMEauVan9bqt4ExZ4j_/view?usp=drivesdkpag172.webp",
    "https://drive.google.com/file/d/1O02INH5gl1LFreR4bpoIqdZnk3oBE1GW/view?usp=drivesdkpag173.webp",
    "https://drive.google.com/file/d/1u7_KebSqiAIODKvcXxHaTTesci4g1-VI/view?usp=drivesdkpag174.webp",
    "https://drive.google.com/file/d/1JElKYu83ZvynyT24i3vh9haXB4uLwMji/view?usp=drivesdkpag175.webp",
    "https://drive.google.com/file/d/1vp8DrjmPdQ-uoccuZA9l2JVg70TCbJMW/view?usp=drivesdkpag176.webp",
    "https://drive.google.com/file/d/1vqfLF9TgwGdQ4HDTFvZhTdN6_Qe20dB3/view?usp=drivesdkpag177.webp",
    "https://drive.google.com/file/d/1apR6_CCmpV51g_6Ssy7eGatoPuCKTvJL/view?usp=drivesdkpag178.webp",
    "https://drive.google.com/file/d/1caNTlc41PeUckP7ICWljvH5beglzNl-W/view?usp=drivesdkpag179.webp",
    "https://drive.google.com/file/d/1R1fvWm2Vobkw75n84x0goAFDUIfYN6EH/view?usp=drivesdkpag180.webp",
    "https://drive.google.com/file/d/1P1huF37wd2RDSlvMCUpZjU94tvNTdAjn/view?usp=drivesdkpag181.webp",
    "https://drive.google.com/file/d/1BlFoByjG9euS4RVhU_5T7P1JflxVOOVz/view?usp=drivesdkpag182.webp",
    "https://drive.google.com/file/d/1hfWxCFcdasmSpXxuOpLzxx_EcEl_B1TU/view?usp=drivesdkpag183.webp",
    "https://drive.google.com/file/d/1EQGD7ZN-C8d8BNKnaAZbktZigWGCQ1zp/view?usp=drivesdkpag184.webp",
    "https://drive.google.com/file/d/1xXMg_k2bR-3IBg-NjhUp_m2XyPVR3AQT/view?usp=drivesdkpag185.webp",
    "https://drive.google.com/file/d/1qMh7nxq9xK4xycISOKp7fhNiG_Z-r-uG/view?usp=drivesdkpag186.webp",
    "https://drive.google.com/file/d/1ClV5H7NDcSXXQR_OUcm-x0B7bFfsQVaw/view?usp=drivesdkpag187.webp",
    "https://drive.google.com/file/d/1u16QRpnjZzVu280H2Sf2MfGCNGZnuXBF/view?usp=drivesdkpag188.webp",
    "https://drive.google.com/file/d/1aHffPpF9owrmZdDCmHYldO-7mlvlViyj/view?usp=drivesdkpag189.webp",
    "https://drive.google.com/file/d/1DFi6hAuTbSjThuBD-7410mSFv3grMsW4/view?usp=drivesdkpag190.webp",
    "https://drive.google.com/file/d/1Eps-S7_IepWA-meWxmVmR3cx6VUIEKwt/view?usp=drivesdkpag191.webp",
    "https://drive.google.com/file/d/1BexhZMiPyRGaFK3f8HKwCAdoZXx2MAjc/view?usp=drivesdkpag192.webp",
    "https://drive.google.com/file/d/1So05j5K2T51FD2SzVdyR1-4nAYaDySxi/view?usp=drivesdkpag193.webp",
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