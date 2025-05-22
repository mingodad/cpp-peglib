  call TOP
  end 0

TOP:
  opencapture 0
  call INSTRUCTIONS
  closecapture 0
  ret

S:
  opencapture 1
  set 002e000001000000000000000000000000000000000000000000000000000000
  catch __L1
__L2:
  set 002e000001000000000000000000000000000000000000000000000000000000
  partialcommit __L2
__L1:
  closecapture 1
  ret

MULTILINECOMMENT:
  opencapture 2
  quad 2d2d5b5b
  catch __L3
__L4:
  catch __L5
  char 5d
  char 5d
  failtwice
__L5:
  any
  partialcommit __L4
__L3:
  char 5d
  char 5d
  closecapture 2
  ret

COMMENT:
  opencapture 3
  char 2d
  char 2d
  catch __L7
__L8:
  set fffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
  partialcommit __L8
__L7:
  char 0a
  closecapture 3
  ret

__prefix:
  catch __L9
__L10:
  catch __L11
  catch __L13
  call MULTILINECOMMENT
  commit __L14
__L13:
  call COMMENT
__L14:
  commit __L12
__L11:
  call S
__L12:
  partialcommit __L10
__L9:
  ret

INSTRUCTIONS:
  call __prefix
  opencapture 4
  call INSTRUCTION
  catch __L15
__L16:
  call INSTRUCTION
  partialcommit __L16
__L15:
  call END
  closecapture 4
  ret

INSTRUCTION:
  call __prefix
  opencapture 5
  catch __L17
  call RULEINSTR
  commit __L18
__L17:
  call LABELDEF
__L18:
  closecapture 5
  ret

RULEINSTR:
  call __prefix
  opencapture 6
  catch __L19
  catch __L21
  catch __L23
  catch __L25
  catch __L27
  catch __L29
  catch __L31
  catch __L33
  catch __L35
  catch __L37
  catch __L39
  catch __L41
  catch __L43
  catch __L45
  catch __L47
  catch __L49
  catch __L51
  catch __L53
  catch __L55
  catch __L57
  catch __L59
  catch __L61
  catch __L63
  catch __L65
  catch __L67
  catch __L69
  catch __L71
  catch __L73
  catch __L75
  call ANYINSTR
  commit __L76
__L75:
  call BACKCOMMITINSTR
__L76:
  commit __L74
__L73:
  call CALLINSTR
__L74:
  commit __L72
__L71:
  call CATCHINSTR
__L72:
  commit __L70
__L69:
  call CHARINSTR
__L70:
  commit __L68
__L67:
  call BITMASKINSTR
__L68:
  commit __L66
__L65:
  call CLOSECAPTUREINSTR
__L66:
  commit __L64
__L63:
  call COMMITINSTR
__L64:
  commit __L62
__L61:
  call INTRPCAPTUREINSTR
__L62:
  commit __L60
__L59:
  call ENDINSTR
__L60:
  commit __L58
__L57:
  call FAILTWICEINSTR
__L58:
  commit __L56
__L55:
  call FAILINSTR
__L56:
  commit __L54
__L53:
  call JUMPINSTR
__L54:
  commit __L52
__L51:
  call NOOPINSTR
__L52:
  commit __L50
__L49:
  call TRAPINSTR
__L50:
  commit __L48
__L47:
  call OPENCAPTUREINSTR
__L48:
  commit __L46
__L45:
  call PARTIALCOMMITINSTR
__L46:
  commit __L44
__L43:
  call QUADINSTR
__L44:
  commit __L42
__L41:
  call RETINSTR
__L42:
  commit __L40
__L39:
  call SETINSTR
__L40:
  commit __L38
__L37:
  call RANGEINSTR
__L38:
  commit __L36
__L35:
  call SKIPINSTR
__L36:
  commit __L34
__L33:
  call SPANINSTR
__L34:
  commit __L32
__L31:
  call TESTANYINSTR
__L32:
  commit __L30
__L29:
  call TESTCHARINSTR
__L30:
  commit __L28
__L27:
  call TESTQUADINSTR
__L28:
  commit __L26
__L25:
  call TESTSETINSTR
__L26:
  commit __L24
__L23:
  call VARINSTR
__L24:
  commit __L22
__L21:
  call COUNTERINSTR
__L22:
  commit __L20
__L19:
  call CONDJUMPINSTR
__L20:
  closecapture 6
  ret

END:
  call __prefix
  opencapture 7
  catch __L77
  any
  failtwice
__L77:
  closecapture 7
  ret

ANYINSTR:
  call __prefix
  opencapture 8
  char 61
  char 6e
  char 79
  closecapture 8
  ret

BACKCOMMITINSTR:
  call __prefix
  opencapture 9
  quad 6261636b
  quad 636f6d6d
  char 69
  char 74
  call S
  call LABEL
  closecapture 9
  ret

CALLINSTR:
  call __prefix
  opencapture 10
  quad 63616c6c
  call S
  call LABEL
  closecapture 10
  ret

CATCHINSTR:
  call __prefix
  opencapture 11
  catch __L79
  quad 63617463
  char 68
  commit __L80
__L79:
  quad 63686f69
  char 63
  char 65
__L80:
  call S
  call LABEL
  closecapture 11
  ret

CHARINSTR:
  call __prefix
  opencapture 12
  quad 63686172
  call S
  call HEXBYTE
  closecapture 12
  ret

BITMASKINSTR:
  call __prefix
  opencapture 13
  quad 6269746d
  char 61
  char 73
  char 6b
  call S
  call UNSIGNED
  call S
  call HEXQUAD
  call S
  call HEXQUAD
  call S
  call HEXQUAD
  closecapture 13
  ret

CLOSECAPTUREINSTR:
  call __prefix
  opencapture 14
  quad 636c6f73
  quad 65636170
  quad 74757265
  call S
  call SLOT
  closecapture 14
  ret

COMMITINSTR:
  call __prefix
  opencapture 15
  quad 636f6d6d
  char 69
  char 74
  call S
  call LABEL
  closecapture 15
  ret

ENDINSTR:
  call __prefix
  opencapture 16
  char 65
  char 6e
  char 64
  call S
  call CODE
  closecapture 16
  ret

FAILINSTR:
  call __prefix
  opencapture 17
  quad 6661696c
  closecapture 17
  ret

FAILTWICEINSTR:
  call __prefix
  opencapture 18
  quad 6661696c
  quad 74776963
  char 65
  closecapture 18
  ret

INTRPCAPTUREINSTR:
  call __prefix
  opencapture 19
  quad 696e7472
  quad 70636170
  quad 74757265
  call S
  call INTRPCAPTURETYPES
  call S
  catch __L81
  call SLOT
  commit __L82
__L81:
  quad 64656661
  char 75
  char 6c
  char 74
__L82:
  closecapture 19
  ret

JUMPINSTR:
  call __prefix
  opencapture 20
  quad 6a756d70
  call S
  call LABEL
  closecapture 20
  ret

NOOPINSTR:
  call __prefix
  opencapture 21
  quad 6e6f6f70
  closecapture 21
  ret

TRAPINSTR:
  call __prefix
  opencapture 22
  quad 74726170
  closecapture 22
  ret

OPENCAPTUREINSTR:
  call __prefix
  opencapture 23
  quad 6f70656e
  quad 63617074
  char 75
  char 72
  char 65
  call S
  call SLOT
  closecapture 23
  ret

PARTIALCOMMITINSTR:
  call __prefix
  opencapture 24
  quad 70617274
  quad 69616c63
  quad 6f6d6d69
  char 74
  call S
  call LABEL
  closecapture 24
  ret

QUADINSTR:
  call __prefix
  opencapture 25
  quad 71756164
  call S
  call QUAD
  closecapture 25
  ret

RETINSTR:
  call __prefix
  opencapture 26
  char 72
  char 65
  char 74
  closecapture 26
  ret

SETINSTR:
  call __prefix
  opencapture 27
  char 73
  char 65
  char 74
  call S
  call SET
  closecapture 27
  ret

RANGEINSTR:
  call __prefix
  opencapture 28
  quad 72616e67
  char 65
  call S
  call HEXBYTE
  call S
  call HEXBYTE
  closecapture 28
  ret

SKIPINSTR:
  call __prefix
  opencapture 29
  quad 736b6970
  call S
  call UNSIGNED
  closecapture 29
  ret

SPANINSTR:
  call __prefix
  opencapture 30
  quad 7370616e
  call S
  call SET
  closecapture 30
  ret

TESTANYINSTR:
  call __prefix
  opencapture 31
  quad 74657374
  char 61
  char 6e
  char 79
  call S
  call LABEL
  closecapture 31
  ret

TESTCHARINSTR:
  call __prefix
  opencapture 32
  quad 74657374
  quad 63686172
  call S
  call HEXBYTE
  call S
  call LABEL
  closecapture 32
  ret

TESTQUADINSTR:
  call __prefix
  opencapture 33
  quad 74657374
  quad 71756164
  call S
  call QUAD
  call S
  call LABEL
  closecapture 33
  ret

TESTSETINSTR:
  call __prefix
  opencapture 34
  quad 74657374
  char 73
  char 65
  char 74
  call S
  call SET
  call S
  call LABEL
  closecapture 34
  ret

VARINSTR:
  call __prefix
  opencapture 35
  char 76
  char 61
  char 72
  call S
  call SLOT
  closecapture 35
  ret

COUNTERINSTR:
  call __prefix
  opencapture 36
  quad 636f756e
  char 74
  char 65
  char 72
  call S
  call REGISTER
  call S
  call UNSIGNED
  closecapture 36
  ret

CONDJUMPINSTR:
  call __prefix
  opencapture 37
  quad 636f6e64
  quad 6a756d70
  call S
  call REGISTER
  call S
  call LABEL
  closecapture 37
  ret

LABELDEF:
  call __prefix
  opencapture 38
  call LABEL
  call COLON
  closecapture 38
  ret

CODE:
  call __prefix
  opencapture 39
  call UNSIGNED
  closecapture 39
  ret

HEXBYTE:
  call __prefix
  opencapture 40
  counter 1 2
__L83:
  set 000000000000ff037e0000007e00000000000000000000000000000000000000
  condjump 1 __L83
  closecapture 40
  ret

HEXQUAD:
  call __prefix
  opencapture 41
  set 000000000000ff037e0000007e00000000000000000000000000000000000000
  catch __L84
  counter 2 7
__L85:
  set 000000000000ff037e0000007e00000000000000000000000000000000000000
  partialcommit __NEXT__
  condjump 2 __L85
  commit __NEXT__
__L84:
  closecapture 41
  ret

LABEL:
  call __prefix
  opencapture 42
  set 000000000000ff03feffff87feffff0700000000000000000000000000000000
  catch __L86
  counter 3 63
__L87:
  set 000000000000ff03feffff87feffff0700000000000000000000000000000000
  partialcommit __NEXT__
  condjump 3 __L87
  commit __NEXT__
__L86:
  closecapture 42
  ret

UNSIGNED:
  call __prefix
  opencapture 43
  set 000000000000ff03000000000000000000000000000000000000000000000000
  catch __L88
__L89:
  set 000000000000ff03000000000000000000000000000000000000000000000000
  partialcommit __L89
__L88:
  closecapture 43
  ret

NUMBER:
  call __prefix
  opencapture 44
  catch __L90
  char 2d
  commit __NEXT__
__L90:
  set 000000000000ff03000000000000000000000000000000000000000000000000
  catch __L91
__L92:
  set 000000000000ff03000000000000000000000000000000000000000000000000
  partialcommit __L92
__L91:
  closecapture 44
  ret

QUAD:
  call __prefix
  opencapture 45
  counter 4 8
__L93:
  set 000000000000ff037e0000007e00000000000000000000000000000000000000
  condjump 4 __L93
  closecapture 45
  ret

SET:
  call __prefix
  opencapture 46
  counter 5 64
__L94:
  set 000000000000ff037e0000007e00000000000000000000000000000000000000
  condjump 5 __L94
  closecapture 46
  ret

SLOT:
  call __prefix
  opencapture 47
  call UNSIGNED
  closecapture 47
  ret

REGISTER:
  call __prefix
  opencapture 48
  call UNSIGNED
  closecapture 48
  ret

TYPE:
  call __prefix
  opencapture 49
  call UNSIGNED
  closecapture 49
  ret

COLON:
  call __prefix
  opencapture 50
  char 3a
  closecapture 50
  ret

AMPERSAND:
  call __prefix
  opencapture 51
  char 26
  closecapture 51
  ret

STRINGLITERAL:
  call __prefix
  opencapture 52
  char 27
  opencapture 53
  catch __L95
__L96:
  catch __L97
  char 5c
  catch __L99
  set 0000000080000000000000100040540000000000000000000000000000000000
  commit __L100
__L99:
  counter 6 3
__L101:
  set 000000000000ff03000000000000000000000000000000000000000000000000
  condjump 6 __L101
__L100:
  commit __L98
__L97:
  set ffffffff7fffffffffffffefffffffffffffffffffffffffffffffffffffffff
__L98:
  partialcommit __L96
__L95:
  closecapture 53
  char 27
  closecapture 52
  ret

INTRPCAPTURETYPES:
  call __prefix
  opencapture 54
  opencapture 55
  quad 7275696e
  char 74
  char 33
  char 32
  closecapture 55
  closecapture 54
  ret

