# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "trix"
pin "@rails/actiontext", to: "actiontext.esm.js"
pin "local-time" # @3.0.2
pin "download" # @8.0.0
pin "#lib/internal/streams/stream.js", to: "#lib--internal--streams--stream.js.js" # @2.3.8
pin "@sindresorhus/is", to: "@sindresorhus--is.js" # @0.7.0
pin "archive-type" # @4.0.0
pin "assert" # @2.0.1
pin "base64-js" # @1.5.1
pin "bl" # @1.2.3
pin "buffer" # @2.0.1
pin "buffer-alloc" # @1.2.0
pin "buffer-alloc-unsafe" # @1.1.0
pin "buffer-crc32" # @0.2.13
pin "buffer-fill" # @1.0.0
pin "cacheable-request" # @2.1.4
pin "clone-response" # @1.0.2
pin "constants" # @2.0.1
pin "content-disposition" # @0.5.4
pin "core-util-is" # @1.0.3
pin "decode-uri-component" # @0.2.2
pin "decompress" # @4.2.1
pin "decompress-response" # @3.3.0
pin "decompress-tar" # @4.1.1
pin "decompress-tarbz2" # @4.1.1
pin "decompress-targz" # @4.1.1
pin "decompress-unzip" # @4.0.1
pin "duplexer3" # @0.1.5
pin "electron" # @29.1.0
pin "end-of-stream" # @1.4.4
pin "escape-string-regexp" # @1.0.5
pin "events" # @2.0.1
pin "ext-list" # @2.2.2
pin "ext-name" # @5.0.0
pin "fd-slicer" # @1.1.0
pin "file-type" # @11.1.0
pin "filename-reserved-regex" # @2.0.0
pin "filenamify" # @3.0.0
pin "from2" # @2.3.0
pin "fs" # @2.0.1
pin "fs-constants" # @1.0.0
pin "get-stream" # @4.1.0
pin "got" # @8.3.2
pin "graceful-fs" # @4.2.11
pin "has-symbol-support-x" # @1.4.2
pin "has-to-string-tag-x" # @1.4.1
pin "http" # @2.0.1
pin "http-cache-semantics" # @3.8.1
pin "https" # @2.0.1
pin "ieee754" # @1.2.1
pin "inherits" # @2.0.4
pin "into-stream" # @3.1.0
pin "is-natural-number" # @4.0.1
pin "is-object" # @1.0.2
pin "is-plain-obj" # @1.1.0
pin "is-retry-allowed" # @1.2.0
pin "is-stream" # @1.1.0
pin "isarray" # @1.0.0
pin "isurl" # @1.0.0
pin "json-buffer" # @3.0.0
pin "keyv" # @3.0.0
pin "lowercase-keys" # @1.0.0
pin "make-dir" # @2.1.0
pin "mime-db" # @1.52.0
pin "mimic-response" # @1.0.1
pin "normalize-url" # @2.0.1
pin "object-assign" # @4.1.1
pin "once" # @1.4.0
pin "p-cancelable" # @0.4.1
pin "p-event" # @2.3.1
pin "p-finally" # @1.0.0
pin "p-is-promise" # @1.1.0
pin "p-timeout" # @2.0.1
pin "path" # @2.0.1
pin "pend" # @1.2.0
pin "pify" # @4.0.1
pin "pinkie" # @2.0.4
pin "pinkie-promise" # @2.0.1
pin "prepend-http" # @2.0.0
pin "process" # @2.0.1
pin "process-nextick-args" # @2.0.1
pin "pump" # @3.0.0
pin "punycode" # @2.0.1
pin "query-string" # @5.1.1
pin "querystring" # @2.0.1
pin "readable-stream" # @2.3.8
pin "readable-stream/duplex", to: "readable-stream--duplex.js" # @2.3.8
pin "responselike" # @1.0.2
pin "safe-buffer" # @5.2.1
pin "seek-bzip" # @1.0.6
pin "semver" # @5.7.2
pin "sort-keys" # @1.1.2
pin "sort-keys-length" # @1.0.1
pin "stream" # @2.0.1
pin "strict-uri-encode" # @1.1.0
pin "string_decoder" # @2.0.1
pin "strip-dirs" # @2.1.0
pin "strip-outer" # @1.0.1
pin "tar-stream" # @1.6.2
pin "through" # @2.3.8
pin "timed-out" # @4.0.1
pin "to-buffer" # @1.1.1
pin "trim-repeated" # @1.0.0
pin "unbzip2-stream" # @1.4.3
pin "url" # @2.0.1
pin "url-parse-lax" # @3.0.0
pin "url-to-options" # @1.0.1
pin "util" # @2.0.1
pin "util-deprecate" # @1.0.2
pin "wrappy" # @1.0.2
pin "xtend" # @4.0.2
pin "yauzl" # @2.10.0
pin "zlib" # @2.0.1
